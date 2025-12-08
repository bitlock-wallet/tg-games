import React, { useEffect, useRef, useState } from "react";
import { useTelegram } from "../../TelegramProvider";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";

interface Entry {
  name: string;
  score: number;
  rn?: number;
  userId?: string;
}

interface LeaderboardProps {
  visible: boolean;
  isGameOver: boolean;
  currentScore: number;
  scoreSubmitted?: boolean;
  optimisticScore?: { score: number; username: string } | null;
  multiplier?: number | string;
}

export function Leaderboard({ visible, isGameOver, currentScore, scoreSubmitted, optimisticScore, multiplier = 1 }: LeaderboardProps) {
  const [mounted, setMounted] = useState(false);
  const [showMultiplierInfo, setShowMultiplierInfo] = useState(false);
  const { getLeaderboardWindow, user } = useTelegram();

  const [serverTop, setServerTop] = useState<Entry[]>([]);
  const [serverWindow, setServerWindow] = useState<Entry[]>([]);
  const [serverTotal, setServerTotal] = useState<number | null>(null);
  const [serverRank, setServerRank] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => setMounted(true), []);

  // multiplier is now provided by parent so no fetch here

  // Close multiplier info when the leaderboard visibility changes (e.g. game started)
  useEffect(() => {
    if (!visible) setShowMultiplierInfo(false);
  }, [visible]);

  // fetch leaderboard window from server when visible.
  // Special-case: if the leaderboard is visible because the game just ended (isGameOver)
  // and the parent passed `scoreSubmitted` which is still false, wait for the submission
  // to complete to avoid the race. Otherwise fetch immediately (e.g. first-open).
  useEffect(() => {
    if (!visible) return;
    if (isGameOver && typeof scoreSubmitted !== 'undefined' && !scoreSubmitted) return;

    let cancelled = false;
    setIsLoading(true);
    (async () => {
      try {
        const data = await getLeaderboardWindow('lumberjack', user?.id ? String(user.id) : undefined, 5, 5, 5);
        if (cancelled) return;
        if (data) {
          // console.log('[Leaderboard] fetched data from server:', data);
          const mapRow = (r: any) => ({
            name: r.username ?? r.name ?? 'Unknown',
            score: r.high_score ?? r.score ?? 0,
            rn: r.rn !== undefined && r.rn !== null && !Number.isNaN(Number(r.rn)) ? Number(r.rn) : undefined,
            userId: r.user_id !== undefined && r.user_id !== null ? String(r.user_id) : undefined,
          } as Entry);

          if (Array.isArray(data.top)) setServerTop(data.top.map(mapRow));
          if (Array.isArray(data.window)) setServerWindow(data.window.map(mapRow));
          // If the server says the player is outside top and the returned `window`
          // does not include the player's row, fetch a tight window (before=0, after=0)
          // to retrieve just the user's row so we can render it as the 6th row.
          try {
            const curUserId = user?.id ? String(user.id) : undefined;
            const topLen = Array.isArray(data.top) ? data.top.length : 0;
            const rankNum = data.rank !== undefined && data.rank !== null && !Number.isNaN(Number(data.rank)) ? Number(data.rank) : undefined;
            if (typeof rankNum === 'number' && rankNum > topLen && curUserId) {
              const containsUser = (Array.isArray(data.window) && data.window.some((r: any) => String(r.user_id) === curUserId));
              if (!containsUser) {
                const tight = await getLeaderboardWindow('lumberjack', curUserId, 5, 0, 0);
                if (tight && Array.isArray(tight.window) && tight.window.length > 0) {
                  // Append the tight row (avoid duplicates)
                  setServerWindow((prev) => {
                    const ids = new Set(prev.map((r) => String(r.userId)));
                    const newRows = tight.window
                      .map((r: any) => mapRow(r))
                      .filter((r: Entry) => !ids.has(r.userId || ''));
                    return [...prev, ...newRows];
                  });
                }
              }
            }
          } catch (err) {
            // ignore tight fetch errors
            console.warn('[Leaderboard] failed to fetch tight user row', err);
          }
          if (data.total !== undefined && data.total !== null && !Number.isNaN(Number(data.total))) setServerTotal(Number(data.total));
          if (data.rank !== undefined && data.rank !== null && !Number.isNaN(Number(data.rank))) setServerRank(Number(data.rank));
        }
      } catch (e) {
        console.warn('Failed to fetch leaderboard-window from server', e);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [visible, isGameOver, scoreSubmitted, getLeaderboardWindow, user?.id]);

  if (!mounted) return null;
  if (!visible) return null;

  // Merge optimistic score into leaderboard for instant feedback
  let top = serverTop.slice(0, 5);
  const currentUserId = user?.id ? String(user.id) : undefined;
  let optimisticRank: number | undefined;

  if (optimisticScore && currentUserId) {
    // Create optimistic entry
    const optimisticEntry: Entry = {
      name: optimisticScore.username,
      score: optimisticScore.score,
      userId: currentUserId,
    };

    // Remove existing user entry if present
    const filteredTop = top.filter(e => !e.userId || String(e.userId) !== currentUserId);

    // Create full sorted list to determine actual rank
    const fullList = [...filteredTop, optimisticEntry].sort((a, b) => b.score - a.score);

    // Find where the optimistic score ranks
    const rankIndex = fullList.findIndex(e => e.userId === currentUserId);
    optimisticRank = rankIndex + 1;

    // Only show in top 5 if it actually makes it
    top = fullList.slice(0, 5);
  }

  // Show "You" row if: 
  // 1. Server says you're outside top 5, OR
  // 2. Optimistic score exists but didn't make top 5
  const shouldShowYou = (typeof serverRank === 'number' && serverRank > top.length && !optimisticScore) ||
    (optimisticScore && optimisticRank && optimisticRank > 5);

  let youEntry: Entry | undefined;
  if (shouldShowYou) {
    if (optimisticScore && optimisticRank && optimisticRank > 5) {
      // Use optimistic data for "You" row
      youEntry = {
        name: optimisticScore.username,
        score: optimisticScore.score,
        userId: currentUserId,
        rn: optimisticRank,
      };
    } else if (serverWindow.length > 0) {
      // Use server data for "You" row
      youEntry = serverWindow.find((r) => typeof r.rn === 'number' ? r.rn === serverRank : (r.userId && currentUserId ? String(r.userId) === currentUserId : false));
    }
  }

  // If server indicates the player is outside top, but the returned window didn't include them,
  // fetch a tight window (before=0, after=0) to get just the user's row.


  return (
    <div className="absolute inset-0 z-80 flex items-center justify-center pointer-events-auto overflow-x-hidden">
      <div className="bg-black/60 backdrop-blur-sm  rounded-xl p-6 w-auto min-w-max sm:min-w-[420px] lg:min-w-[520px] text-white h-auto max-w-[96%]">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-clash font-semibold">Leaderboard</h3>
          <div className="text-sm text-white/80 font-clash">Top 5</div>
        </div>

        <div className="flex items-start justify-start gap-2 mb-3">
          <div className="text-sm text-white/90 font-clash">Multiplier <span className="font-bold text-primary">{multiplier}x</span></div>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setShowMultiplierInfo(true); }}
            aria-expanded={showMultiplierInfo}
            aria-label="Multiplier info"
            className="p-0.5 rounded text-white/80 hover:bg-white/6 focus:outline-none"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
            >
              <path
                d="M10 14.1665V9.1665"
                stroke="#FFFFFF"
                strokeOpacity="0.5"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <ellipse
                cx="0.833333"
                cy="0.833333"
                rx="0.833333"
                ry="0.833333"
                transform="matrix(1 0 0 -1 9.16602 7.5)"
                fill="#FFFFFF"
                fillOpacity="0.5"
              />
              <path
                d="M18.3327 9.99984C18.3327 13.9282 18.3327 15.8924 17.1123 17.1128C15.8919 18.3332 13.9277 18.3332 9.99935 18.3332C6.07098 18.3332 4.10679 18.3332 2.8864 17.1128C1.66602 15.8924 1.66602 13.9282 1.66602 9.99984C1.66602 6.07147 1.66602 4.10728 2.8864 2.88689C4.10679 1.6665 6.07098 1.6665 9.99935 1.6665C13.9277 1.6665 15.8919 1.6665 17.1123 2.88689C17.9237 3.69834 18.1957 4.83863 18.2868 6.6665"
                stroke="#FFFFFF"
                strokeOpacity="0.5"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* name input removed as requested */}

        <div className="space-y-2">
          {/* Show spinner when loading for the first time (no data yet) */}
          {isLoading && top.length === 0 && (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          )}

          {/* Show "no scores" only when done loading and truly empty */}
          {!isLoading && top.length === 0 && <div className="text-sm text-white/70 font-clash">No scores yet — be the first!</div>}

          {/* Show subtle loading indicator when updating with existing data */}
          {isLoading && top.length > 0 && (
            <div className="flex items-center justify-center py-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary/50"></div>
              <span className="ml-2 text-xs text-white/50">Updating...</span>
            </div>
          )}

          {top.map((e, i) => {
            const pos = i + 1;
            const posColor = pos === 1 ? '#FFD700' : pos === 2 ? '#C0C0C0' : pos === 3 ? '#CD7F32' : 'var(--color-primary)';
            const isCurrent = (currentUserId && e.userId && String(e.userId) === currentUserId);
            return (
              <div
                key={i}
                className="flex items-center justify-between w-full h-[34px] rounded-[12px] opacity-100 border-b border-white/10 p-[6px] bg-[color:var(--color-black-2)]"
                style={{ transform: 'rotate(0deg)', background: isCurrent ? 'color-mix(in srgb, var(--color-black-2) 85%, white 15%)' : undefined }}
              >
                <div className="flex items-center font-clash font-medium text-sm truncate pl-[10px] py-[10px]">
                  <div style={{ width: '20px', textAlign: 'center', marginRight: '8px', fontWeight: 700, color: posColor }}>{pos}</div>
                  <div className="truncate font-clash">{e.name}</div>
                </div>

                <div className="ml-4 flex items-center justify-center gap-1 px-2 rounded-md bg-primary" style={{ width: 60, height: 20 }}>
                  <span className="text-primary-foreground font-bold" style={{ fontSize: '0.875rem' }}>{e.score}</span>
                  <img src="/images/tree/axe-points.svg" alt="points" style={{ width: 16, height: 16, display: 'block' }} />
                </div>
              </div>
            );
          })}

          {/* show current player as single 6th row when they're not in top-5 */}
          {youEntry && (
            <div className="mt-1">
              {(() => {
                const e = youEntry as Entry;
                const pos = typeof e.rn === 'number' ? e.rn : 0;
                const posColor = pos === 1 ? '#FFD700' : pos === 2 ? '#C0C0C0' : pos === 3 ? '#CD7F32' : 'var(--color-primary)';
                const isCurrent = (currentUserId && e.userId && String(e.userId) === currentUserId);
                return (
                  <div
                    key={`you-${pos}-${e.name}-${e.score}`}
                    className="flex items-center justify-between w-full h-[34px] rounded-[12px] opacity-100 border-b border-white/10 p-[6px] bg-[color:var(--color-black-2)]"
                    style={{ transform: 'rotate(0deg)', background: isCurrent ? 'color-mix(in srgb, var(--color-black-2) 85%, white 15%)' : undefined }}
                  >
                    <div className="flex items-center font-clash font-medium text-sm truncate pl-[10px] py-[10px]">
                      <div style={{ width: '20px', textAlign: 'center', marginRight: '8px', fontWeight: 700, color: posColor }}>{pos}</div>
                      <div className="truncate">{e.name}</div>
                    </div>

                    <div className="ml-4 flex items-center justify-center gap-1 px-2 rounded-md bg-primary" style={{ width: 60, height: 20 }}>
                      <span className="text-primary-foreground font-bold" style={{ fontSize: '0.875rem' }}>{e.score}</span>
                      <img src="/images/tree/axe-points.svg" alt="points" style={{ width: 16, height: 16, display: 'block' }} />
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>

        {/* show current score prominently when game over */}
        {isGameOver && (
          <div className="mt-4 text-center">
            <div className="text-sm text-white/80 font-clash">Your score</div>
            <div className="text-2xl font-clash font-bold mt-1">{currentScore}</div>
          </div>
        )}
      </div>

      <Dialog open={showMultiplierInfo} onOpenChange={setShowMultiplierInfo}>
        <DialogContent className="w-[min(92%,420px)] max-w-[420px] max-h-[80vh] overflow-y-auto small-scrollbar scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
          <DialogHeader className="text-left">
            <DialogTitle>Multiplier</DialogTitle>
            <DialogDescription>Multiplier is based on 7 day swap volume.</DialogDescription>
          </DialogHeader>

          <table className="w-full text-sm mt-4">
            <thead className="text-left text-white/80"><tr><th>7d volume</th><th>Multiplier</th></tr></thead>
            <tbody>
              <tr><td className="py-1">&lt; $10,000</td><td className="py-1">1x</td></tr>
              <tr><td className="py-1">$10,000 — $20,000</td><td className="py-1">2x</td></tr>
              <tr><td className="py-1">20,000 — $30,000</td><td className="py-1">3x</td></tr>
              <tr><td className="py-1">$30,000 — $40,000</td><td className="py-1">4x</td></tr>
              <tr><td className="py-1">&gt; $40,000</td><td className="py-1">5x</td></tr>
            </tbody>
          </table>

          <div className="pt-4 flex justify-start">
            <Button onClick={(e: any) => { e.stopPropagation?.(); setShowMultiplierInfo(false); }} className="px-3 py-1">Got it</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
