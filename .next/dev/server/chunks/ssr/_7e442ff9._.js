module.exports = [
"[project]/src/app/actions/upsertUserAndScore.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"78c5852c71554d8806ed936f92da38cccff9b48395":"upsertUserAndScoreAction"},"",""] */ __turbopack_context__.s([
    "upsertUserAndScoreAction",
    ()=>upsertUserAndScoreAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
async function upsertUserAndScoreAction(gameId, userId, score, initData) {
    const { pgPool } = await __turbopack_context__.A("[project]/src/db/drizzle.ts [app-rsc] (ecmascript, async loader)");
    const client = await pgPool.connect();
    try {
        console.log('[upsertUserAndScore] start', {
            gameId,
            userId,
            score,
            initData
        });
        await client.query('BEGIN');
        // Parse initData (URL query string) server-side to prefer authoritative user info
        // initData format: key=value&... where 'user' may be a JSON-encoded value
        let parsedUsername = null;
        let parsedDisplayName = null;
        try {
            if (initData) {
                const pairs = new URLSearchParams(initData);
                const u = pairs.get('user');
                if (u) {
                    try {
                        const parsed = JSON.parse(decodeURIComponent(u));
                        if (parsed) {
                            if (parsed.username) parsedUsername = String(parsed.username);
                            // prefer first_name as base for display name if username missing
                            if (parsed.first_name || parsed.last_name) parsedDisplayName = [
                                parsed.first_name,
                                parsed.last_name
                            ].filter(Boolean).join(' ');
                            // if username empty but display name available, use that as username as requested
                            if (!parsedUsername && parsedDisplayName) parsedUsername = parsedDisplayName;
                        }
                    } catch (err) {
                        // ignore parse errors
                        console.warn('[upsertUserAndScore] failed to parse initData user field', err, u);
                    }
                }
            }
        } catch (e) {
        // ignore
        }
        // Final fallbacks
        const finalUsername = parsedUsername ?? `user-${userId}`;
        const finalDisplayName = parsedDisplayName ?? finalUsername;
        console.log('[upsertUserAndScore] resolved user info', {
            parsedUsername,
            parsedDisplayName,
            finalUsername,
            finalDisplayName
        });
        const UPSERT_USER = `
      INSERT INTO users (id, username, display_name)
      VALUES ($1, $2, $3)
      ON CONFLICT (id) DO UPDATE SET
        username = EXCLUDED.username,
        display_name = EXCLUDED.display_name
      RETURNING id, username, display_name, created_at
    `;
        const userRes = await client.query(UPSERT_USER, [
            userId,
            finalUsername,
            finalDisplayName
        ]);
        console.log('[upsertUserAndScore] user upsert result rows:', userRes.rows);
        const UPSERT_SCORE = `
      INSERT INTO game_scores (game_id, user_id, username, score)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (game_id, user_id)
      DO UPDATE SET score = GREATEST(game_scores.score, EXCLUDED.score), username = EXCLUDED.username, recorded_at = CURRENT_TIMESTAMP
      RETURNING game_id, user_id, username, score
    `;
        const scoreRes = await client.query(UPSERT_SCORE, [
            gameId,
            userId,
            finalUsername,
            score
        ]);
        console.log('[upsertUserAndScore] score upsert result rows:', scoreRes.rows);
        await client.query('COMMIT');
        return {
            user: userRes.rows && userRes.rows[0] ? userRes.rows[0] : null,
            score: scoreRes.rows && scoreRes.rows[0] ? scoreRes.rows[0] : null
        };
    } catch (e) {
        try {
            await client.query('ROLLBACK');
        } catch (_) {
        // ignore
        }
        throw e;
    } finally{
        client.release();
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    upsertUserAndScoreAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(upsertUserAndScoreAction, "78c5852c71554d8806ed936f92da38cccff9b48395", null);
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/upsertUserAndScore.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$upsertUserAndScore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/upsertUserAndScore.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/upsertUserAndScore.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "78c5852c71554d8806ed936f92da38cccff9b48395",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$upsertUserAndScore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["upsertUserAndScoreAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$upsertUserAndScore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions/upsertUserAndScore.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$upsertUserAndScore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/upsertUserAndScore.ts [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=_7e442ff9._.js.map