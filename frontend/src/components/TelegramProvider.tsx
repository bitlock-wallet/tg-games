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
  sendScore: (gameId: string, score: number) => Promise<Response>;
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
    if (!initData) {
      throw new Error("Cannot send score: missing initData from Telegram WebApp");
    }

    const body = {
      user_id: user?.id ? String(user.id) : undefined,
      username: user?.username ?? undefined,
      score,
      initData,
    };

    const res = await fetch(`/api/${encodeURIComponent(gameId)}/submit-score`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "(no body)");
      const err = new Error(`submit-score failed: ${res.status} ${res.statusText} - ${text}`);
      // surface to caller
      throw err;
    }

    return res;
  }, [initData, user]);

  return (
    <TelegramContext.Provider value={{ initData, initDataUnsafe, user, sendScore }}>
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
