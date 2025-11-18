import React, { useEffect, useRef, useState } from "react";
import { useTelegram } from "../../TelegramProvider";

interface Entry {
  name: string;
  score: number;
  t: number;
  rn?: number;
}

const STORAGE_KEY = "lumberjack_leaderboard_v1";
const NAME_KEY = "lumberjack_player_name";

interface LeaderboardProps {
  visible: boolean;
  isGameOver: boolean;
  currentScore: number;
}

export function Leaderboard({ visible, isGameOver, currentScore }: LeaderboardProps) {
  const [mounted, setMounted] = useState(false);

  const [name, setName] = useState(() => {
    if (typeof window === 'undefined') return "Player";
    try {
      return localStorage.getItem(NAME_KEY) || "Player";
    } catch {
      return "Player";
    }
  });

  const [entries, setEntries] = useState<Entry[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Entry[]) : [];
    } catch {
      return [];
    }
  });
  const { getLeaderboard, getLeaderboardWindow, user } = useTelegram();

  const [serverTop, setServerTop] = useState<Entry[]>([]);
  const [serverWindow, setServerWindow] = useState<Entry[]>([]);
  const [serverTotal, setServerTotal] = useState<number | null>(null);
  const [serverRank, setServerRank] = useState<number | null>(null);

  useEffect(() => setMounted(true), []);

  const addedRef = useRef(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    // If the leaderboard is visible, try to fetch top 5 from the server via TelegramProvider
    if (!visible) return;
    let cancelled = false;
    (async () => {
      console.log('[Lumberjack] Leaderboard: fetching leaderboard-window from backend');
      try {
        const data = await getLeaderboardWindow('lumberjack', user?.id ? String(user.id) : undefined, 5, 5, 5);
        if (!cancelled && data && data.success) {
          // server returns top and window arrays
          const mapRow = (r: any) => ({ name: r.username ?? r.name ?? 'Unknown', score: r.high_score ?? r.score ?? 0, t: Date.now(), rn: typeof r.rn === 'number' ? r.rn : undefined } as Entry);

          if (Array.isArray(data.top)) setServerTop(data.top.map(mapRow));
          if (Array.isArray(data.window)) setServerWindow(data.window.map(mapRow));
          if (typeof data.total === 'number') setServerTotal(data.total);
          if (typeof data.rank === 'number') setServerRank(data.rank);

          // also persist top to local entries as fallback
          try {
            const next = Array.isArray(data.top) ? data.top.map(mapRow) : [];
            if (next.length) {
              setEntries(next as Entry[]);
              localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
            }
          } catch {}
        }
      } catch (e) {
        console.warn('Failed to fetch leaderboard-window from server', e);
      }
    })();
    return () => { cancelled = true; };
  }, [visible, getLeaderboard]);

  useEffect(() => {
    // when game becomes over, add current score once (if > 0)
    if (isGameOver && !addedRef.current && currentScore > 0) {
      addEntry(name, currentScore);
      addedRef.current = true;
    }
  }, [isGameOver, currentScore, name]);

  useEffect(() => {
    // reset addedRef when the leaderboard becomes hidden (new game)
    if (!visible) addedRef.current = false;
  }, [visible]);

  function persist(list: Entry[]) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {}
  }

  function addEntry(n: string, s: number) {
    const next: Entry[] = [...entries, { name: n || "Player", score: s, t: Date.now() }]
      .sort((a, b) => b.score - a.score || a.t - b.t)
      .slice(0, 20);
    setEntries(next);
    persist(next);
    try {
      localStorage.setItem(NAME_KEY, n || "Player");
    } catch {}
  }

  function onNameChange(v: string) {
    setName(v);
    try {
      localStorage.setItem(NAME_KEY, v);
    } catch {}
  }

  if (!mounted) return null;

  if (!visible) return null;

  const top = serverTop.length > 0 ? serverTop.slice(0, 5) : entries.slice(0, 5);

  // determine around entries: prefer serverWindow if available
  const topNames = new Set(top.map(e => e.name));
  const aroundEntries: Entry[] = serverWindow.length > 0 ? serverWindow : [];
  const aroundFiltered = aroundEntries.filter(e => !topNames.has(e.name));

  return (
    <div className="absolute inset-0 z-80 flex items-center justify-center pointer-events-auto">
      <div className="bg-transparent backdrop-blur-sm rounded-xl p-6 w-[320px] sm:w-[420px] lg:w-[520px] text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Leaderboard</h3>
          <div className="text-sm text-white/80">Top 5</div>
        </div>

        {/* name input removed as requested */}

        <div className="space-y-2">
          {top.length === 0 && <div className="text-sm text-white/70">No scores yet — be the first!</div>}
          {top.map((e, i) => {
              const pos = i + 1;
              const posColor = pos === 1 ? '#FFD700' : pos === 2 ? '#C0C0C0' : pos === 3 ? '#CD7F32' : '#00FFE5';
              return (
                <div
                  key={i}
                  className="flex items-center justify-between w-full h-[34px] rounded-[12px] opacity-100 border-b border-white/10 p-[6px] bg-[color:var(--color-black-2)]"
                  style={{ transform: 'rotate(0deg)' }}
                >
                  <div className="flex items-center font-medium text-sm truncate pl-[10px] py-[10px]">
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

          {/* show around block if we have entries around current player */}
          {aroundFiltered.length > 0 && (
            <>
              <div className="h-[10px]" />
              <div className="text-xs text-white/60 mb-1">Around you</div>
              <div className="space-y-2">
                {aroundFiltered.map((e, j) => {
                  // compute position number: prefer server-provided rn, fallback to local lookup
                  const pos = typeof e.rn === 'number' ? e.rn : (entries.findIndex(x => x.name === e.name) + 1);
                  const posColor = pos === 1 ? '#FFD700' : pos === 2 ? '#C0C0C0' : pos === 3 ? '#CD7F32' : '#00FFE5';
                  return (
                    <div
                      key={`around-${j}-${e.name}-${e.score}`}
                      className="flex items-center justify-between w-full h-[34px] rounded-[12px] opacity-100 border-b border-white/10 p-[6px] bg-[color:var(--color-black-2)]"
                      style={{ transform: 'rotate(0deg)' }}
                    >
                      <div className="flex items-center font-medium text-sm truncate pl-[10px] py-[10px]">
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
              </div>
            </>
          )}
        </div>

        {/* show current score prominently when game over */}
        {isGameOver && (
          <div className="mt-4 text-center">
            <div className="text-sm text-white/80">Your score</div>
            <div className="text-2xl font-bold mt-1">{currentScore}</div>
          </div>
        )}
      </div>
    </div>
  );
}
