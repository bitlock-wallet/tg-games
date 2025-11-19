"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

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
  sendScore: (gameId: string, score: number) => Promise<any>;
  getLeaderboard: (gameId: string, limit?: number) => Promise<any>;
  getLeaderboardWindow: (gameId: string, userId?: string | number, top?: number, before?: number, after?: number) => Promise<any>;
};

const TelegramContext = createContext<TelegramContextType | undefined>(undefined);

export function TelegramProvider({ children }: { children: React.ReactNode }) {
  const [initData, setInitData] = useState<string | null>(null);
  const [initDataUnsafe, setInitDataUnsafe] = useState<any | null>(null);
  const [user, setUser] = useState<TdUser | null>(null);

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
    // If the Web App URL includes a chat_id (group context), scope the gameId to that chat
    try {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const chatId = params.get('chat_id');
        if (chatId) gameId = `${gameId}:${chatId}`;
      }
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
      console.log('[TelegramProvider] calling server action upsertUserAndScoreAction', { gameId, bodyUserId, hasInitData: !!initData });
      // Pass `initData` to the server action and let the server parse authoritative user info.
      const result = await mod.upsertUserAndScoreAction(gameId, bodyUserId, score, initData || null);
      console.log('[TelegramProvider] server action result', result);
      return result;
    } catch (e) {
      // Fallback: if dynamic import fails (older Next versions), try calling the API endpoint.
      console.warn('[TelegramProvider] server action import failed, falling back to API POST', e);
      const apiBase = process.env.NEXT_PUBLIC_API_BASE || '';
      const body = {
        user_id: bodyUserId,
        score,
        initData: initData || 'dummy-init-data',
      };
      const res = await fetch(`${apiBase}/api/${encodeURIComponent(gameId)}/submit-score`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const text = await res.text().catch(() => '(no body)');
        throw new Error(`submit-score failed: ${res.status} ${res.statusText} - ${text}`);
      }
      const json = await res.json();
      console.log('[TelegramProvider] fallback API result', json);
      return json;
    }
  }, [initData, user]);

  const getLeaderboard = useCallback(async (gameId: string, limit = 10) => {
    // If the Web App URL includes a chat_id (group context), scope the gameId to that chat
    try {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const chatId = params.get('chat_id');
        if (chatId) gameId = `${gameId}:${chatId}`;
      }
    } catch (e) {
      // ignore
    }
    const apiBase = process.env.NEXT_PUBLIC_API_BASE || '';
    const res = await fetch(`${apiBase}/api/${encodeURIComponent(gameId)}/leaderboard?limit=${limit}`, {
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
    // If the Web App URL includes a chat_id (group context), scope the gameId to that chat
    try {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const chatId = params.get('chat_id');
        if (chatId) gameId = `${gameId}:${chatId}`;
      }
    } catch (e) {
      // ignore
    }
    const apiBase = process.env.NEXT_PUBLIC_API_BASE || '';
    const q = new URLSearchParams();
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

    const url = `${apiBase}/api/${encodeURIComponent(gameId)}/leaderboard-window?${q.toString()}`;
    console.log('[TelegramProvider] getLeaderboardWindow URL:', url);
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '(no body)');
      throw new Error(`get-leaderboard-window failed: ${res.status} ${res.statusText} - ${text}`);
    }

    const json = await res.json();
    console.log('[TelegramProvider] getLeaderboardWindow response:', json);
    return json;
  }, [initData, initDataUnsafe, user]);

  return (
    <TelegramContext.Provider value={{ initData, initDataUnsafe, user, sendScore, getLeaderboard, getLeaderboardWindow }}>
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
