module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/components/TelegramProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TelegramProvider",
    ()=>TelegramProvider,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useTelegram",
    ()=>useTelegram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
// Resolve API base URL at runtime. Behavior:
// - If `NEXT_PUBLIC_API_BASE` is set, use it.
// - If `NEXT_PUBLIC_RUNNING_IN_DOCKER` === 'true', prefer localhost (container-local).
// - Client-side: if page is loaded from `localhost`, the browser runs on the host machine
//   so reach the containerized backend via `host.docker.internal:3000`.
// - Otherwise use `window.location.origin` to keep same-origin behavior.
let cachedApiBase = null;
async function detectHostDockerInternal(timeoutMs = 500) {
    // Try a fast fetch to host.docker.internal. Use mode 'no-cors' so CORS doesn't block
    // the promise from resolving on supportive browsers. Network errors (DNS fail / refused)
    // will still reject the promise.
    try {
        const controller = new AbortController();
        const id = setTimeout(()=>controller.abort(), timeoutMs);
        // Use a root path; many apps respond on `/` or will at least accept a TCP connection.
        await fetch('http://host.docker.internal:3000/', {
            method: 'GET',
            mode: 'no-cors',
            signal: controller.signal,
            cache: 'no-store'
        });
        clearTimeout(id);
        return true;
    } catch (e) {
        return false;
    }
}
async function getApiBase() {
    if (cachedApiBase) return cachedApiBase;
    if (typeof process !== 'undefined' && process.env && process.env.NEXT_PUBLIC_API_BASE) {
        cachedApiBase = process.env.NEXT_PUBLIC_API_BASE;
        return cachedApiBase;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        // Server-side: default to localhost (best-effort). Cannot probe host.docker.internal here.
        cachedApiBase = 'http://localhost:3000';
        return cachedApiBase;
    }
    //TURBOPACK unreachable
    ;
    const hostname = undefined;
    // Otherwise, try to detect host.docker.internal quickly and use it if present.
    const hasHostDocker = undefined;
}
const TelegramContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function TelegramProvider({ children }) {
    const [initData, setInitData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [initDataUnsafe, setInitDataUnsafe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // If Telegram WebApp is available on the window, read initData immediately.
        // Otherwise try to load the SDK script (this is typically injected by the Telegram WebView,
        // but loading the library is harmless in other environments).
        const getWebApp = ()=>window.Telegram?.WebApp;
        const applyWebApp = ()=>{
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
        script.onload = ()=>{
            applyWebApp();
        };
        script.onerror = ()=>{
            // If the script fails to load, we still allow the app to run. initData will be null.
            console.warn("Telegram WebApp script failed to load");
        };
        document.head.appendChild(script);
        return ()=>{
        // noop: don't remove the script since other components might rely on it.
        };
    }, []);
    const sendScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (gameId, score)=>{
        // If the Web App URL includes a chat_id (group context), scope the gameId to that chat
        try {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
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
        const bodyDisplayName = user ? [
            user.first_name,
            user.last_name
        ].filter(Boolean).join(' ') || null : null;
        // Debug logging to help with verification issues
        // debug logging removed
        if (!user || !user.id || !initData) {
            console.warn('[TelegramProvider] sendScore: missing Telegram user/initData; submitting as test-user');
        }
        // Call the server action which will create the user (if missing) and upsert the score in a transaction.
        // We import dynamically here to avoid bundling server-only code into the client bundle during builds.
        try {
            const mod = await __turbopack_context__.A("[project]/src/app/actions/upsertUserAndScore.ts [app-ssr] (ecmascript, async loader)");
            console.log('[TelegramProvider] calling server action upsertUserAndScoreAction', {
                gameId,
                bodyUserId,
                hasInitData: !!initData
            });
            // Pass `initData` to the server action and let the server parse authoritative user info.
            const result = await mod.upsertUserAndScoreAction(gameId, bodyUserId, score, initData || null);
            console.log('[TelegramProvider] server action result', result);
            return result;
        } catch (e) {
            // Fallback: if dynamic import fails (older Next versions), try calling the API endpoint.
            console.warn('[TelegramProvider] server action import failed, falling back to API POST', e);
            const apiBase = await getApiBase();
            const body = {
                user_id: bodyUserId,
                score,
                initData: initData || 'dummy-init-data'
            };
            const res = await fetch(`${apiBase}/api/${encodeURIComponent(gameId)}/submit-score`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            if (!res.ok) {
                const text = await res.text().catch(()=>'(no body)');
                throw new Error(`submit-score failed: ${res.status} ${res.statusText} - ${text}`);
            }
            const json = await res.json();
            console.log('[TelegramProvider] fallback API result', json);
            return json;
        }
    }, [
        initData,
        user
    ]);
    const getLeaderboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (gameId, limit = 10)=>{
        // If the Web App URL includes a chat_id (group context), scope the gameId to that chat
        try {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        } catch (e) {
        // ignore
        }
        const apiBase = await getApiBase();
        const res = await fetch(`${apiBase}/api/${encodeURIComponent(gameId)}/leaderboard?limit=${limit}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!res.ok) {
            const text = await res.text().catch(()=>"(no body)");
            throw new Error(`get-leaderboard failed: ${res.status} ${res.statusText} - ${text}`);
        }
        return await res.json();
    }, []);
    const getLeaderboardWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (gameId, userId, top = 5, before = 5, after = 5)=>{
        // If the Web App URL includes a chat_id (group context), scope the gameId to that chat
        try {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        } catch (e) {
        // ignore
        }
        const apiBase = await getApiBase();
        const q = new URLSearchParams();
        // Resolve user id: prefer explicit argument, then internal Telegram `user` state,
        // then try `initDataUnsafe.user`, then try parsing raw `initData` for a 'user' pair.
        let resolvedUserId = typeof userId !== 'undefined' ? String(userId) : undefined;
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
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!res.ok) {
            const text = await res.text().catch(()=>'(no body)');
            throw new Error(`get-leaderboard-window failed: ${res.status} ${res.statusText} - ${text}`);
        }
        const json = await res.json();
        console.log('[TelegramProvider] getLeaderboardWindow response:', json);
        return json;
    }, [
        initData,
        initDataUnsafe,
        user
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TelegramContext.Provider, {
        value: {
            initData,
            initDataUnsafe,
            user,
            sendScore,
            getLeaderboard,
            getLeaderboardWindow
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/TelegramProvider.tsx",
        lineNumber: 286,
        columnNumber: 5
    }, this);
}
function useTelegram() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(TelegramContext);
    if (!ctx) throw new Error("useTelegram must be used within a TelegramProvider");
    return ctx;
}
const __TURBOPACK__default__export__ = TelegramProvider;
}),
"[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__068fc032._.js.map