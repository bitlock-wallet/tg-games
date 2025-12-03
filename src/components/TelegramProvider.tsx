"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import scopeGameId from "../lib/scopeGameId";

// Resolve API base URL at runtime. Behavior:
// - If `NEXT_PUBLIC_API_BASE` is set, use it.
// - If `NEXT_PUBLIC_RUNNING_IN_DOCKER` === 'true', prefer localhost (container-local).
// - Client-side: if page is loaded from `localhost`, the browser runs on the host machine
//   so reach the containerized backend via `host.docker.internal:3000`.
// - Otherwise use `window.location.origin` to keep same-origin behavior.
let cachedApiBase: string | null = null;

async function detectHostDockerInternal(timeoutMs = 500): Promise<boolean> {
  // Try a fast fetch to host.docker.internal. Use mode 'no-cors' so CORS doesn't block
  // the promise from resolving on supportive browsers. Network errors (DNS fail / refused)
  // will still reject the promise.
  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeoutMs);
    // Use a root path; many apps respond on `/` or will at least accept a TCP connection.
    await fetch('http://host.docker.internal:3000/', { method: 'GET', mode: 'no-cors', signal: controller.signal, cache: 'no-store' });
    clearTimeout(id);
    return true;
  } catch (e) {
    return false;
  }
}

async function getApiBase(): Promise<string> {
  if (cachedApiBase) return cachedApiBase;

  if (typeof process !== 'undefined' && process.env && process.env.NEXT_PUBLIC_API_BASE) {
    cachedApiBase = process.env.NEXT_PUBLIC_API_BASE;
    return cachedApiBase;
  }

  if (typeof window === 'undefined') {
    // Server-side: default to localhost (best-effort). Cannot probe host.docker.internal here.
    cachedApiBase = 'http://localhost:3000';
    return cachedApiBase;
  }

  const hostname = window.location.hostname;
  // If the browser is running on localhost, prefer localhost (developer expectation)
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    cachedApiBase = 'http://localhost:3000';
    return cachedApiBase;
  }


  if (window.location.protocol === 'https:') {
    cachedApiBase = window.location.origin;
    return cachedApiBase;
  }

  // Otherwise, try to detect host.docker.internal quickly and use it if present.
  const hasHostDocker = await detectHostDockerInternal(500);
  if (hasHostDocker) {
    cachedApiBase = 'http://host.docker.internal:3000';
    return cachedApiBase;
  }

  // Fallback to same origin
  cachedApiBase = window.location.origin;
  return cachedApiBase;
}

type TdUser = {
  id?: string | number;
  username?: string;
  first_name?: string;
  last_name?: string;
};

type TelegramContextType = {
  initData: string | null;
  initDataUnsafe: any | null;
  user: TdUser | null;
  chatId?: string | null;
  sendScore: (gameId: string, score: number) => Promise<any>;
  getLeaderboard: (gameId: string, limit?: number) => Promise<any>;
  getLeaderboardWindow: (gameId: string, userId?: string | number, top?: number, before?: number, after?: number) => Promise<any>;
  getMultiplier?: (userId?: string | number) => Promise<{ volume: number; multiplier: number }>;
};

const TelegramContext = createContext<TelegramContextType | undefined>(undefined);

export function TelegramProvider({ children }: { children: React.ReactNode }) {
  const [initData, setInitData] = useState<string | null>(null);
  const [initDataUnsafe, setInitDataUnsafe] = useState<any | null>(null);
  const [user, setUser] = useState<TdUser | null>(null);
  const [chatId, setChatId] = useState<string | null>(null);

  useEffect(() => {
    // If Telegram WebApp is available on the window, read initData immediately.
    // Otherwise try to load the SDK script (this is typically injected by the Telegram WebView,
    // but loading the library is harmless in other environments).
    const getWebApp = () => (window as any).Telegram?.WebApp;

    const applyWebApp = () => {
      const WebApp = getWebApp();
      if (!WebApp) return false;
      const raw = WebApp.initData ?? null;
      const unsafe = WebApp.initDataUnsafe ?? null;
      setInitData(raw);
      setInitDataUnsafe(unsafe);
      if (unsafe && unsafe.user) setUser(unsafe.user);

      // Try to detect chat_id from several sources:
      // 1. URL search param `chat_id` (private-chat case where we append it explicitly)
      // 2. initData `start_param` (or variants) when bot deep-link encoded `<gameId>:<chatId>` for groups
      try {
        let detected: string | null = null;
        if (typeof window !== 'undefined') {
          const params = new URLSearchParams(window.location.search);
          // Prefer explicit chat_id query param, fall back to chat_instance
          const s = params.get('chat_id') ?? params.get('chat_instance');
          if (s) detected = s;
        }
        if (!detected && raw) {
          try {
            const pairs = new URLSearchParams(raw);
            let sp = pairs.get('start_param') ?? pairs.get('startapp') ?? pairs.get('start');
            if (sp) {
              let decodedSp = sp;
              // If no colon is found, assume it is Base64URL and decode it
              if (!sp.includes(':')) {
                try {
                  // 1. Replace URL-safe chars back to standard Base64
                  const base64 = sp.replace(/-/g, '+').replace(/_/g, '/');
                  // 2. Decode
                  decodedSp = atob(base64);
                  console.log('[TelegramProvider] decoded start_param:', decodedSp);
                } catch (e) {
                  console.warn('[TelegramProvider] failed to decode start_param:', e);
                }
              }
              
              // support payload format <gameId>:<chatId>
              const parts = decodedSp.split(':');
              if (parts.length > 1) detected = parts.slice(1).join(':');
            }
          } catch (e) {}
        }
        // Also check unsafe init object for start_param if present
        if (!detected && unsafe && typeof unsafe === 'object') {
          let possible = unsafe.start_param ?? unsafe.startapp ?? unsafe.start;
          if (possible && typeof possible === 'string') {
            let decodedPossible = possible;
            // If no colon is found, assume it is Base64URL and decode it
            if (!possible.includes(':')) {
              try {
                // 1. Replace URL-safe chars back to standard Base64
                const base64 = possible.replace(/-/g, '+').replace(/_/g, '/');
                // 2. Decode
                decodedPossible = atob(base64);
                console.log('[TelegramProvider] decoded unsafe start_param:', decodedPossible);
              } catch (e) {
                console.warn('[TelegramProvider] failed to decode unsafe start_param:', e);
              }
            }
            
            const parts = decodedPossible.split(':');
            if (parts.length > 1) detected = parts.slice(1).join(':');
          }
          // also accept unsafe.chat_instance as a fallback scoping key
          if (!detected && unsafe.chat_instance) detected = String(unsafe.chat_instance);
        }
        if (detected) setChatId(detected);
      } catch (e) {
        // ignore
      }
      return true;
    };

    if (applyWebApp()) return;

    // Load the Telegram WebApp script as a fallback.
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-web-app.js";
    script.async = true;
    script.onload = () => {
      applyWebApp();
    };
    script.onerror = () => {
      // If the script fails to load, we still allow the app to run. initData will be null.
      console.warn("Telegram WebApp script failed to load");
    };
    document.head.appendChild(script);

    return () => {
      // noop: don't remove the script since other components might rely on it.
    };
  }, []);

  const sendScore = useCallback(async (gameId: string, score: number) => {
    // Scope the gameId to the chat when possible. Prefer detected chatId from initData.
    try {
      let localChat = chatId ?? null;
      if (!localChat && typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        localChat = params.get('chat_id') ?? params.get('chat_instance');
      }
      gameId = scopeGameId(gameId, localChat);
    } catch (e) {
      // ignore
    }
    // For development, allow sending score without initData
    // if (!initData) {
    //   throw new Error("Cannot send score: missing initData from Telegram WebApp");
    // }

    // Try to extract user id/username from initData if available (initData format: URL query string)
    let resolvedUserId = user?.id ? String(user.id) : undefined;
    let resolvedUsername = user?.username ?? undefined;
    try {
      if (!resolvedUserId && initData) {
        const params = new URLSearchParams(initData);
        const u = params.get('user');
        if (u) {
          try {
            const parsed = JSON.parse(decodeURIComponent(u));
            if (parsed && parsed.id) resolvedUserId = String(parsed.id);
            if (parsed && parsed.username) resolvedUsername = parsed.username;
          } catch (e) {
            // ignore parse errors
          }
        }
      }
    } catch (e) {
      // ignore
    }

    const bodyUserId = resolvedUserId ?? (user?.id ? String(user.id) : 'test-user');
    const bodyUsername = resolvedUsername ?? user?.username ?? 'TestUser';
    const bodyDisplayName = user ? [user.first_name, user.last_name].filter(Boolean).join(' ') || null : null;
    // Debug logging to help with verification issues
    // debug logging removed

    if ((!user || !user.id) || !initData) {
      console.warn('[TelegramProvider] sendScore: missing Telegram user/initData; submitting as test-user');
    }

    // Call the server action which will create the user (if missing) and upsert the score in a transaction.
    // We import dynamically here to avoid bundling server-only code into the client bundle during builds.
    try {
      const mod = await import('../app/actions/upsertUserAndScore');
      // console.log('[TelegramProvider] calling server action upsertUserAndScoreAction', { gameId, bodyUserId, hasInitData: !!initData });
      // Pass `initData` to the server action and let the server parse authoritative user info.
      const result = await mod.upsertUserAndScoreAction(gameId, bodyUserId, score, initData || null);
      // console.log('[TelegramProvider] server action result', result);
      return result;
    } catch (e) {
      // Fallback: if dynamic import fails (older Next versions), try calling the API endpoint.
      console.warn('[TelegramProvider] server action import failed, falling back to API POST', e);
      const apiBase = await getApiBase();
      const body = {
        user_id: bodyUserId,
        score,
        initData: initData || 'dummy-init-data',
      };
      // If we can, pass chat_id as query param too to make the scope explicit
      let submitUrl = `${apiBase}/api/${encodeURIComponent(gameId)}/submit-score`;
      try {
        let localChat = chatId ?? null;
        if (!localChat && typeof window !== 'undefined') {
          const params = new URLSearchParams(window.location.search);
          localChat = params.get('chat_id');
        }
        if (localChat) submitUrl += `?chat_id=${encodeURIComponent(localChat)}`;
      } catch (e) {}
      const res = await fetch(submitUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const text = await res.text().catch(() => '(no body)');
        throw new Error(`submit-score failed: ${res.status} ${res.statusText} - ${text}`);
      }
      const json = await res.json();
      // console.log('[TelegramProvider] fallback API result', json);
      return json;
    }
  }, [initData, user]);

  const getLeaderboard = useCallback(async (gameId: string, limit = 10) => {
    // Scope the gameId to the chat when possible. Prefer detected chatId from initData.
    try {
      let localChat = chatId ?? null;
      if (!localChat && typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        localChat = params.get('chat_id') ?? params.get('chat_instance');
      }
      if (localChat) gameId = scopeGameId(gameId, localChat);
    } catch (e) {
      // ignore
    }
    const apiBase = await getApiBase();
    let url = `${apiBase}/api/${encodeURIComponent(gameId)}/leaderboard?limit=${limit}`;
    // include initData when present so the server can derive chat scoping if needed
    try {
      if (initData) url += `&initData=${encodeURIComponent(initData)}`;
    } catch (e) {}
    try {
      let localChat = chatId ?? null;
      if (!localChat && typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        localChat = params.get('chat_id') ?? params.get('chat_instance');
      }
      if (localChat) url += `&chat_id=${encodeURIComponent(localChat)}`;
    } catch (e) {}
    const res = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "(no body)");
      throw new Error(`get-leaderboard failed: ${res.status} ${res.statusText} - ${text}`);
    }

    return await res.json();
  }, []);

  const getLeaderboardWindow = useCallback(async (gameId: string, userId?: string | number, top = 5, before = 5, after = 5) => {
    // Scope the gameId to the chat when possible. Prefer detected chatId from initData.
    try {
      let localChat = chatId ?? null;
      if (!localChat && typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        localChat = params.get('chat_id') ?? params.get('chat_instance');
      }
      gameId = scopeGameId(gameId, localChat);
    } catch (e) {
      // ignore
    }
    const apiBase = await getApiBase();
    const q = new URLSearchParams();
    try {
      let localChat = chatId ?? null;
      if (!localChat && typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        localChat = params.get('chat_id');
      }
      if (localChat) q.set('chat_id', String(localChat));
    } catch (e) {}
    // Resolve user id: prefer explicit argument, then internal Telegram `user` state,
    // then try `initDataUnsafe.user`, then try parsing raw `initData` for a 'user' pair.
    let resolvedUserId: string | undefined = typeof userId !== 'undefined' ? String(userId) : undefined;
    try {
      if (!resolvedUserId) {
        if (user && user.id) resolvedUserId = String(user.id);
        else if (initDataUnsafe && initDataUnsafe.user && initDataUnsafe.user.id) resolvedUserId = String(initDataUnsafe.user.id);
        else if (initData) {
          const pairs = new URLSearchParams(initData);
          const u = pairs.get('user');
          if (u) {
            try {
              const parsed = JSON.parse(decodeURIComponent(u));
              if (parsed && parsed.id) resolvedUserId = String(parsed.id);
            } catch (e) {
              // ignore
            }
          }
        }
      }
    } catch (e) {
      // ignore
    }
    if (resolvedUserId) q.set('user_id', String(resolvedUserId));
    q.set('top', String(top));
    q.set('before', String(before));
    q.set('after', String(after));

    // include initData when present so the server can derive chat scoping if needed
    try {
      if (initData) q.set('initData', String(initData));
    } catch (e) {}
    const url = `${apiBase}/api/${encodeURIComponent(gameId)}/leaderboard-window?${q.toString()}`;
    // console.log('[TelegramProvider] getLeaderboardWindow URL:', url);
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '(no body)');
      throw new Error(`get-leaderboard-window failed: ${res.status} ${res.statusText} - ${text}`);
    }

    const json = await res.json();
    // console.log('[TelegramProvider] getLeaderboardWindow response:', json);
    return json;
  }, [initData, initDataUnsafe, user, chatId]);

  const getMultiplier = useCallback(async (userId?: string | number) : Promise<{ volume: number; multiplier: number }> => {
    // Resolve user id similarly to other helper methods
    let resolvedUserId: string | undefined = typeof userId !== 'undefined' ? String(userId) : undefined;
    try {
      if (!resolvedUserId) {
        if (user && user.id) resolvedUserId = String(user.id);
        else if (initDataUnsafe && initDataUnsafe.user && initDataUnsafe.user.id) resolvedUserId = String(initDataUnsafe.user.id);
        else if (initData) {
          const pairs = new URLSearchParams(initData);
          const u = pairs.get('user');
            if (u) {
            try {
              const parsed = JSON.parse(decodeURIComponent(u));
              if (parsed && parsed.id) resolvedUserId = String(parsed.id);
            } catch (e) {
              // ignore
            }
          }
        }
      }
      // intentionally do not resolve username; we only send Telegram id to the API
    } catch (e) {
      // ignore
    }

    // Try server action first via dynamic import
    // Always call the API route from the client. Server action must run server-side.
    try {
      const apiBase = await getApiBase();
      const q = new URLSearchParams();
      if (resolvedUserId) q.set('user_id', String(resolvedUserId));
      const qs = q.toString();
      const url = qs ? `${apiBase}/api/get-multiplier?${qs}` : `${apiBase}/api/get-multiplier`;
      console.log('[TelegramProvider] calling API route', url);
      const res = await fetch(url, { method: 'GET', headers: { 'Content-Type': 'application/json' } });
      if (!res.ok) {
        console.warn('[TelegramProvider] API route returned non-ok', res.status, await res.text().catch(() => '(no body)'));
        return { volume: 0, multiplier: 1 };
      }
      const json = await res.json();
      console.log('[TelegramProvider] API route result', json);
      return { volume: Number(json.volume ?? 0), multiplier: Number(json.multiplier ?? 1) };
    } catch (e2) {
      console.warn('[TelegramProvider] API route fetch failed', e2);
      return { volume: 0, multiplier: 1 };
    }
  }, [initData, initDataUnsafe, user]);

  return (
    <TelegramContext.Provider value={{ initData, initDataUnsafe, user, chatId, sendScore, getLeaderboard, getLeaderboardWindow, getMultiplier }}>
      {children}
    </TelegramContext.Provider>
  );
}

export function useTelegram() {
  const ctx = useContext(TelegramContext);
  if (!ctx) throw new Error("useTelegram must be used within a TelegramProvider");
  return ctx;
}

export default TelegramProvider;
