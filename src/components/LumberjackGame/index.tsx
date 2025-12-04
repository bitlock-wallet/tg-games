"use client";

import React, { useEffect, useRef } from "react";
import LumberjackHeader from "../LumberjackHeader";
import { PlayerSide } from "./types";
import { RESPONSIVE_CONFIG } from "./config";
import { useGameState } from "./hooks/useGameState";
import { useGameTimer } from "./hooks/useGameTimer";
import { useResponsiveBranches } from "./hooks/useResponsiveBranches";
import { Playfield } from "./components/Playfield";
import { ControlButtons } from "./components/ControlButtons";
import { useTelegram } from "../TelegramProvider";

export default function LumberjackGame() {
  const { initData, user, sendScore, chatId, getMultiplier, getLeaderboard, prefetchLeaderboard, invalidateLeaderboardCache } = useTelegram();
  const scoreSentRef = useRef(false);
  const [scoreSubmitted, setScoreSubmitted] = React.useState(false);
  const [optimisticScore, setOptimisticScore] = React.useState<{ score: number; username: string } | null>(null);
  const announcedRef = useRef(false);

  const {
    segments,
    playerSide,
    score,
    isRunning,
    isGameOver,
    flyingChunks,
    flyingBranches,
    bullState,
    animationFrame,
    patternOffset,
    levelNotification,
    setFlyingChunks,
    setFlyingBranches,
    setBullState,
    setAnimationFrame,
    setIsGameOver,
    setIsRunning,
    start,
    handleChop,
    multiplier,
    setMultiplier,
  } = useGameState();

  // multiplier is fetched when the leaderboard is visible (see effect below)

  const { timeRemaining, setTimeRemaining } = useGameTimer(
    isRunning,
    isGameOver,
    score,
    () => setIsGameOver(true),
    setIsRunning
  );

  // Wrapper to start the game and reset the timer. Pass forceNew=true to regenerate the tree (replay).
  const doStart = (forceNew = false) => {
    start(forceNew);
    // reset flag so a new score can be sent for the next run
    scoreSentRef.current = false;
    announcedRef.current = false;
    setScoreSubmitted(false);
    setOptimisticScore(null);
    // reset timer to starting value (2.5 seconds)
    setTimeRemaining(2.5);

    // Prefetch leaderboard data when game starts (fire and forget)
    // This will cache the data so it appears instantly when the game ends
    const scopedGameId = chatId ? `lumberjack:${chatId}` : 'lumberjack';
    prefetchLeaderboard(scopedGameId, user?.id, 5, 5, 5).catch(() => {
      // Ignore prefetch errors (non-critical)
    });
  };

  // When the game ends, send the score to the backend once.
  useEffect(() => {
    if (!isGameOver) return;
    if (scoreSentRef.current) return;
    scoreSentRef.current = true;
    (async () => {
      try {
        // Determine gameId scope
        const scopedGameId = chatId ? `lumberjack:${chatId}` : 'lumberjack';

        // Fetch previous top-5 BEFORE submitting so we can detect enters/improvements
        let prevTop: any[] = [];
        try {
          const leaderboardData = await getLeaderboard(scopedGameId, 5);
          prevTop = leaderboardData?.top || leaderboardData || [];
        } catch (e) {
          // ignore fetch errors
          prevTop = [];
        }

        // figure out previous rank if present
        const prevIndex = user?.id ? prevTop.findIndex((r: any) => String(r.user_id) === String(user.id)) : -1;
        const wasInTop5 = prevIndex !== -1;
        const prevRank = wasInTop5 ? prevIndex + 1 : null;

        // Build username early for optimistic update
        let username = user?.username || null;
        if (!username && (user?.first_name || user?.last_name)) {
          username = [user?.first_name, user?.last_name].filter(Boolean).join(' ');
        }
        if (!username && user?.id) username = `User ${user.id}`;
        if (!username) username = 'You';

        // Set optimistic score immediately for instant UI feedback
        setOptimisticScore({ score, username });

        // Submit score (server upsert)
        await sendScore("lumberjack", score);
        setScoreSubmitted(true);

        // Invalidate cache after score submission to ensure fresh data
        invalidateLeaderboardCache(scopedGameId);

        // Fetch updated top-5 after submit
        let newTop: any[] = [];
        try {
          const leaderboardData = await getLeaderboard(scopedGameId, 5);
          newTop = leaderboardData?.top || leaderboardData || [];
        } catch (e) {
          newTop = [];
        }

        const newIndex = user?.id ? newTop.findIndex((r: any) => String(r.user_id) === String(user.id)) : -1;
        const isInTop5 = newIndex !== -1;
        const newRank = isInTop5 ? newIndex + 1 : null;

        // Clear optimistic score once backend data is received
        setOptimisticScore(null);

        // Announce if user newly entered top5 OR if they were in top5 and improved rank
        const shouldAnnounce = isInTop5 && (!wasInTop5 || (wasInTop5 && prevRank !== null && newRank !== null && newRank < prevRank));
        if (shouldAnnounce && user) {
          announcedRef.current = true;

          // Build username
          let username = user.username || null;
          if (!username && (user.first_name || user.last_name)) {
            username = [user.first_name, user.last_name].filter(Boolean).join(' ');
          }
          if (!username) username = `User ${user.id}`;

          const payload = {
            userId: user.id,
            username,
            score,
            gameId: scopedGameId,
            chatId: chatId ?? null,
            isTopFive: true,
          };

          try {
            if (navigator && (navigator as any).sendBeacon) {
              const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
              (navigator as any).sendBeacon('/api/announce', blob);
            } else {
              fetch('/api/announce', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), keepalive: true }).catch(() => { });
            }
          } catch (e) {
            // ignore announce errors
          }
        }
      } catch (err) {
        // don't block UX on leaderboard failures; log for debugging
        console.error("Failed to submit score", err);
        // still allow leaderboard to fetch after a short delay as fallback
        setTimeout(() => setScoreSubmitted(true), 200);
      }
    })();
  }, [isGameOver, score, sendScore]);

  const { branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx } = useResponsiveBranches();

  const bullRef = useRef<HTMLDivElement | null>(null);
  const playfieldRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isRunning && (e.key === "ArrowLeft" || e.key === "ArrowRight")) doStart(isGameOver ? true : false);
      if (!isRunning) return;
      if (e.key === "ArrowLeft") handleChop("left", branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx, setTimeRemaining);
      if (e.key === "ArrowRight") handleChop("right", branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx, setTimeRemaining);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isRunning, branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx, handleChop, setTimeRemaining, start]);

  // No auto-start: the game should not start automatically when opened from the webapp link.

  useEffect(() => {
    const t = setInterval(() => {
      setFlyingChunks((c) => c.filter((x) => Date.now() - x.t < 500));
      setFlyingBranches((b) => b.filter((x) => Date.now() - x.t < 350));
    }, 100);
    return () => clearInterval(t);
  }, [setFlyingChunks, setFlyingBranches]);

  useEffect(() => {
    let rafId: number;
    const animate = () => {
      setAnimationFrame((f) => f + 1);
      rafId = requestAnimationFrame(animate);
    };
    if (flyingChunks.length > 0 || flyingBranches.length > 0) {
      rafId = requestAnimationFrame(animate);
    }
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [flyingChunks.length, flyingBranches.length, setAnimationFrame]);

  useEffect(() => {
    if (bullState === "leftChop" || bullState === "rightChop") {
      const timer = setTimeout(() => {
        setBullState("standing");
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [bullState, setBullState]);

  function handlePlayfieldClick(e: React.MouseEvent<HTMLDivElement>) {
    if (!playfieldRef.current) return;
    const rect = playfieldRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const centerX = rect.width / 2;

    if (!isRunning) {
      doStart();
      return;
    }

    if (clickX < centerX) {
      handleChop("left", branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx, setTimeRemaining);
    } else {
      handleChop("right", branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx, setTimeRemaining);
    }
  }

  const visibleSegments = segments.slice(0, RESPONSIVE_CONFIG.segment.maxVisible);

  // Fetch multiplier when the leaderboard becomes visible (i.e. before a run)
  const leaderboardVisible = !isRunning || isGameOver;
  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!leaderboardVisible) return;
      try {
        if (!getMultiplier) return;
        // Browser console log so you can see the attempt
        try { console.log('[LumberjackGame] fetching multiplier for user', user?.id); } catch (_) { }
        const res = await getMultiplier(user?.id);
        try { console.log('[LumberjackGame] getMultiplier result', res); } catch (_) { }
        if (!mounted) return;
        if (res && typeof res.multiplier === 'number') setMultiplier(res.multiplier);
      } catch (err) {
        console.warn('[LumberjackGame] failed to fetch multiplier when leaderboard visible', err);
      }
    })();
    return () => { mounted = false; };
  }, [leaderboardVisible, user?.id, getMultiplier, setMultiplier]);

  return (
    <>
      {/* Header */}
      {/* <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-6">
        <LumberjackHeader title="Lumberjack" onSlippageClick={() => {}} />
      </div> */}

      {/* Game Area with controls directly beneath the playfield */}
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-4 sm:px-6">
        <Playfield
          playfieldRef={playfieldRef}
          bullRef={bullRef}
          visibleSegments={visibleSegments}
          patternOffset={patternOffset}
          playerSide={playerSide}
          bullState={bullState}
          isGameOver={isGameOver}
          isRunning={isRunning}
          flyingChunks={flyingChunks}
          flyingBranches={flyingBranches}
          branchOffsetLeftPx={branchOffsetLeftPx}
          branchOffsetRightPx={branchOffsetRightPx}
          branchTopOffsetPx={branchTopOffsetPx}
          timeRemaining={timeRemaining}
          multiplier={multiplier}
          score={score}
          levelNotification={levelNotification}
          onPlayfieldClick={handlePlayfieldClick}
          scoreSubmitted={scoreSubmitted}
        />

        {/* Controls are immediately below the playfield */}
        <div className="mt-4 mb-6">
          <ControlButtons
            isRunning={isRunning}
            isGameOver={isGameOver}
            onChop={(side: PlayerSide) => handleChop(side, branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx, setTimeRemaining)}
            onStart={doStart}
          />
        </div>
      </div>
    </>
  );
}
