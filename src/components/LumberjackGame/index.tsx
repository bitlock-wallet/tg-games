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
  const { initData, user, sendScore } = useTelegram();
  const scoreSentRef = useRef(false);
  const [scoreSubmitted, setScoreSubmitted] = React.useState(false);

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
  } = useGameState();

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
    setScoreSubmitted(false);
    // reset timer to starting value (2.5 seconds)
    setTimeRemaining(2.5);
  };

  // When the game ends, send the score to the backend once.
  useEffect(() => {
    if (!isGameOver) return;
    if (scoreSentRef.current) return;
    scoreSentRef.current = true;
    (async () => {
      try {
        await sendScore("lumberjack", score);
        setScoreSubmitted(true);
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
      if (!isRunning && (e.key === "ArrowLeft" || e.key === "ArrowRight")) doStart(isGameOver ? true: false);
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
