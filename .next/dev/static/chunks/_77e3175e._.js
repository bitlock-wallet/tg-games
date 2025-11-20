(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/TelegramProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TelegramProvider",
    ()=>TelegramProvider,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useTelegram",
    ()=>useTelegram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
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
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE) {
        cachedApiBase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE;
        return cachedApiBase;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const hostname = window.location.hostname;
    // If the browser is running on localhost, prefer localhost (developer expectation)
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
        cachedApiBase = 'http://localhost:3000';
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
const TelegramContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function TelegramProvider({ children }) {
    _s();
    const [initData, setInitData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [initDataUnsafe, setInitDataUnsafe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TelegramProvider.useEffect": ()=>{
            // If Telegram WebApp is available on the window, read initData immediately.
            // Otherwise try to load the SDK script (this is typically injected by the Telegram WebView,
            // but loading the library is harmless in other environments).
            const getWebApp = {
                "TelegramProvider.useEffect.getWebApp": ()=>window.Telegram?.WebApp
            }["TelegramProvider.useEffect.getWebApp"];
            const applyWebApp = {
                "TelegramProvider.useEffect.applyWebApp": ()=>{
                    const WebApp = getWebApp();
                    if (!WebApp) return false;
                    const raw = WebApp.initData ?? null;
                    const unsafe = WebApp.initDataUnsafe ?? null;
                    setInitData(raw);
                    setInitDataUnsafe(unsafe);
                    if (unsafe && unsafe.user) setUser(unsafe.user);
                    return true;
                }
            }["TelegramProvider.useEffect.applyWebApp"];
            if (applyWebApp()) return;
            // Load the Telegram WebApp script as a fallback.
            const script = document.createElement("script");
            script.src = "https://telegram.org/js/telegram-web-app.js";
            script.async = true;
            script.onload = ({
                "TelegramProvider.useEffect": ()=>{
                    applyWebApp();
                }
            })["TelegramProvider.useEffect"];
            script.onerror = ({
                "TelegramProvider.useEffect": ()=>{
                    // If the script fails to load, we still allow the app to run. initData will be null.
                    console.warn("Telegram WebApp script failed to load");
                }
            })["TelegramProvider.useEffect"];
            document.head.appendChild(script);
            return ({
                "TelegramProvider.useEffect": ()=>{
                // noop: don't remove the script since other components might rely on it.
                }
            })["TelegramProvider.useEffect"];
        }
    }["TelegramProvider.useEffect"], []);
    const sendScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TelegramProvider.useCallback[sendScore]": async (gameId, score)=>{
            // If the Web App URL includes a chat_id (group context), scope the gameId to that chat
            try {
                if ("TURBOPACK compile-time truthy", 1) {
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
                const mod = await __turbopack_context__.A("[project]/src/app/actions/upsertUserAndScore.ts [app-client] (ecmascript, async loader)");
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
                    const text = await res.text().catch({
                        "TelegramProvider.useCallback[sendScore]": ()=>'(no body)'
                    }["TelegramProvider.useCallback[sendScore]"]);
                    throw new Error(`submit-score failed: ${res.status} ${res.statusText} - ${text}`);
                }
                const json = await res.json();
                console.log('[TelegramProvider] fallback API result', json);
                return json;
            }
        }
    }["TelegramProvider.useCallback[sendScore]"], [
        initData,
        user
    ]);
    const getLeaderboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TelegramProvider.useCallback[getLeaderboard]": async (gameId, limit = 10)=>{
            // If the Web App URL includes a chat_id (group context), scope the gameId to that chat
            try {
                if ("TURBOPACK compile-time truthy", 1) {
                    const params = new URLSearchParams(window.location.search);
                    const chatId = params.get('chat_id');
                    if (chatId) gameId = `${gameId}:${chatId}`;
                }
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
                const text = await res.text().catch({
                    "TelegramProvider.useCallback[getLeaderboard]": ()=>"(no body)"
                }["TelegramProvider.useCallback[getLeaderboard]"]);
                throw new Error(`get-leaderboard failed: ${res.status} ${res.statusText} - ${text}`);
            }
            return await res.json();
        }
    }["TelegramProvider.useCallback[getLeaderboard]"], []);
    const getLeaderboardWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TelegramProvider.useCallback[getLeaderboardWindow]": async (gameId, userId, top = 5, before = 5, after = 5)=>{
            // If the Web App URL includes a chat_id (group context), scope the gameId to that chat
            try {
                if ("TURBOPACK compile-time truthy", 1) {
                    const params = new URLSearchParams(window.location.search);
                    const chatId = params.get('chat_id');
                    if (chatId) gameId = `${gameId}:${chatId}`;
                }
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
                const text = await res.text().catch({
                    "TelegramProvider.useCallback[getLeaderboardWindow]": ()=>'(no body)'
                }["TelegramProvider.useCallback[getLeaderboardWindow]"]);
                throw new Error(`get-leaderboard-window failed: ${res.status} ${res.statusText} - ${text}`);
            }
            const json = await res.json();
            console.log('[TelegramProvider] getLeaderboardWindow response:', json);
            return json;
        }
    }["TelegramProvider.useCallback[getLeaderboardWindow]"], [
        initData,
        initDataUnsafe,
        user
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TelegramContext.Provider, {
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
_s(TelegramProvider, "zcXxi9heAfnj9yK9WtWqX2VPhTI=");
_c = TelegramProvider;
function useTelegram() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TelegramContext);
    if (!ctx) throw new Error("useTelegram must be used within a TelegramProvider");
    return ctx;
}
_s1(useTelegram, "/dMy7t63NXD4eYACoT93CePwGrg=");
const __TURBOPACK__default__export__ = TelegramProvider;
var _c;
__turbopack_context__.k.register(_c, "TelegramProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_77e3175e._.js.map