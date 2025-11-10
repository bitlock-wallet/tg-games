import React, { useEffect, useRef, useState } from "react";

interface Entry {
  name: string;
  score: number;
  t: number;
}

const STORAGE_KEY = "lumberjack_leaderboard_v1";
const NAME_KEY = "lumberjack_player_name";

interface LeaderboardProps {
  visible: boolean;
  isGameOver: boolean;
  currentScore: number;
}

export function Leaderboard({ visible, isGameOver, currentScore }: LeaderboardProps) {
  const [name, setName] = useState(() => {
    try {
      return localStorage.getItem(NAME_KEY) || "Player";
    } catch {
      return "Player";
    }
  });

  const [entries, setEntries] = useState<Entry[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Entry[]) : [];
    } catch {
      return [];
    }
  });

  const addedRef = useRef(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

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

  if (!visible) return null;

  const top = entries.slice(0, 5);

  return (
    <div className="absolute inset-0 z-80 flex items-center justify-center pointer-events-auto">
      <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6 w-[320px] sm:w-[420px] lg:w-[520px] text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Leaderboard</h3>
          <div className="text-sm text-white/80">Top 5</div>
        </div>

        <div className="mb-3">
          <label className="text-xs text-white/80">Your name</label>
          <input
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            className="mt-1 w-full rounded px-2 py-1 text-black"
          />
        </div>

        <div className="space-y-2">
          {top.length === 0 && <div className="text-sm text-white/70">No scores yet — be the first!</div>}
          {top.map((e, i) => (
            <div key={i} className="flex items-center gap-3">
              {/* small bg-large icon (inline trophy svg) */}
              <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 4V6C7 7.10457 7.89543 8 9 8H15C16.1046 8 17 7.10457 17 6V4" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 4C6 4 4 6 4 8V10C4 11.6569 5.34315 13 7 13H9" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div className="font-medium">{e.name}</div>
                  <div className="font-semibold">{e.score}</div>
                </div>
              </div>
            </div>
          ))}
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
