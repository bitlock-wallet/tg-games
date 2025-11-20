import React, { useEffect, useRef, useState } from "react";
import { useTelegram } from "../../TelegramProvider";

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
}

export function Leaderboard({ visible, isGameOver, currentScore, scoreSubmitted }: LeaderboardProps) {
  const [mounted, setMounted] = useState(false);
  const { getLeaderboardWindow, user } = useTelegram();

  const [serverTop, setServerTop] = useState<Entry[]>([]);
  const [serverWindow, setServerWindow] = useState<Entry[]>([]);
  const [serverTotal, setServerTotal] = useState<number | null>(null);
  const [serverRank, setServerRank] = useState<number | null>(null);

  useEffect(() => setMounted(true), []);

  // fetch leaderboard window from server when visible.
  // Special-case: if the leaderboard is visible because the game just ended (isGameOver)
  // and the parent passed `scoreSubmitted` which is still false, wait for the submission
  // to complete to avoid the race. Otherwise fetch immediately (e.g. first-open).
  useEffect(() => {
    if (!visible) return;
    if (isGameOver && typeof scoreSubmitted !== 'undefined' && !scoreSubmitted) return;

    let cancelled = false;
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
      }
    })();
    return () => { cancelled = true; };
  }, [visible, isGameOver, scoreSubmitted, getLeaderboardWindow, user?.id]);

  if (!mounted) return null;
  if (!visible) return null;

  const top = serverTop.slice(0, 5);

  const currentUserId = user?.id ? String(user.id) : undefined;
  const shouldShowYou = typeof serverRank === 'number' && serverRank > top.length;
  let youEntry: Entry | undefined;
  if (shouldShowYou && serverWindow.length > 0) {
    youEntry = serverWindow.find((r) => typeof r.rn === 'number' ? r.rn === serverRank : (r.userId && currentUserId ? String(r.userId) === currentUserId : false));
  }

  // If server indicates the player is outside top, but the returned window didn't include them,
  // fetch a tight window (before=0, after=0) to get just the user's row.


  return (
    <div className="absolute inset-0 z-80 flex items-center justify-center pointer-events-auto">
      <div className="bg-transparent backdrop-blur-sm rounded-xl p-6 w-auto min-w-max sm:min-w-[420px] lg:min-w-[520px] text-white h-auto max-w-[96%]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-clash font-semibold">Leaderboard</h3>
          <div className="text-sm text-white/80 font-clash">Top 5</div>
        </div>

        {/* name input removed as requested */}

        <div className="space-y-2">
          {top.length === 0 && <div className="text-sm text-white/70 font-clash">No scores yet — be the first!</div>}
            {top.map((e, i) => {
              const pos = i + 1;
              const posColor = pos === 1 ? '#FFD700' : pos === 2 ? '#C0C0C0' : pos === 3 ? '#CD7F32' : '#00FFE5';
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

                  <div
                    className="ml-4"
                    style={{
                      width: '60px',
                      height: '20px',
                      borderRadius: 8,
                      background: '#00FFE5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                      paddingLeft: '6px',
                      paddingRight: '6px',
                      opacity: 1,
                      transform: 'rotate(0deg)'
                    }}
                  >
                    <span style={{ color: '#000', fontWeight: 700, fontSize: '0.875rem' }}>{e.score}</span>
                    <img
                      src="/images/tree/points-logo-black.svg"
                      alt="points"
                      style={{ width: '16px', height: '16px', display: 'block' }}
                    />
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
                  const posColor = pos === 1 ? '#FFD700' : pos === 2 ? '#C0C0C0' : pos === 3 ? '#CD7F32' : '#00FFE5';
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

                      <div
                        className="ml-4"
                        style={{
                          width: '60px',
                          height: '20px',
                          borderRadius: 8,
                          background: '#00FFE5',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '4px',
                          paddingLeft: '6px',
                          paddingRight: '6px',
                          opacity: 1,
                          transform: 'rotate(0deg)'
                        }}
                      >
                        <span className="font-clash" style={{ color: '#000', fontWeight: 700, fontSize: '0.875rem' }}>{e.score}</span>
                        <img
                          src="/images/tree/points-logo-black.svg"
                          alt="points"
                          style={{ width: '16px', height: '16px', display: 'block' }}
                        />
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
    </div>
  );
}
