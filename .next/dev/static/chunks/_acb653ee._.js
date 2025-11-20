(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/actions/upsertUserAndScore.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
"use turbopack no side effects";
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/actions/data:e1fa5d [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"78c5852c71554d8806ed936f92da38cccff9b48395":"upsertUserAndScoreAction"},"src/app/actions/upsertUserAndScore.ts",""] */ __turbopack_context__.s([
    "upsertUserAndScoreAction",
    ()=>upsertUserAndScoreAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var upsertUserAndScoreAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("78c5852c71554d8806ed936f92da38cccff9b48395", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "upsertUserAndScoreAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdXBzZXJ0VXNlckFuZFNjb3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwc2VydFVzZXJBbmRTY29yZUFjdGlvbihcclxuICBnYW1lSWQ6IHN0cmluZyxcclxuICB1c2VySWQ6IHN0cmluZyxcclxuICBzY29yZTogbnVtYmVyLFxyXG4gIGluaXREYXRhPzogc3RyaW5nIHwgbnVsbFxyXG4pIHtcclxuICBjb25zdCB7IHBnUG9vbCB9ID0gYXdhaXQgaW1wb3J0KCcuLi8uLi9kYi9kcml6emxlJyk7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgcGdQb29sLmNvbm5lY3QoKTtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coJ1t1cHNlcnRVc2VyQW5kU2NvcmVdIHN0YXJ0JywgeyBnYW1lSWQsIHVzZXJJZCwgc2NvcmUsIGluaXREYXRhIH0pO1xyXG4gICAgYXdhaXQgY2xpZW50LnF1ZXJ5KCdCRUdJTicpO1xyXG5cclxuICAgIC8vIFBhcnNlIGluaXREYXRhIChVUkwgcXVlcnkgc3RyaW5nKSBzZXJ2ZXItc2lkZSB0byBwcmVmZXIgYXV0aG9yaXRhdGl2ZSB1c2VyIGluZm9cclxuICAgIC8vIGluaXREYXRhIGZvcm1hdDoga2V5PXZhbHVlJi4uLiB3aGVyZSAndXNlcicgbWF5IGJlIGEgSlNPTi1lbmNvZGVkIHZhbHVlXHJcbiAgICBsZXQgcGFyc2VkVXNlcm5hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgbGV0IHBhcnNlZERpc3BsYXlOYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChpbml0RGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHBhaXJzID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhpbml0RGF0YSk7XHJcbiAgICAgICAgY29uc3QgdSA9IHBhaXJzLmdldCgndXNlcicpO1xyXG4gICAgICAgIGlmICh1KSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudCh1KSk7XHJcbiAgICAgICAgICAgIGlmIChwYXJzZWQpIHtcclxuICAgICAgICAgICAgICBpZiAocGFyc2VkLnVzZXJuYW1lKSBwYXJzZWRVc2VybmFtZSA9IFN0cmluZyhwYXJzZWQudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgIC8vIHByZWZlciBmaXJzdF9uYW1lIGFzIGJhc2UgZm9yIGRpc3BsYXkgbmFtZSBpZiB1c2VybmFtZSBtaXNzaW5nXHJcbiAgICAgICAgICAgICAgaWYgKHBhcnNlZC5maXJzdF9uYW1lIHx8IHBhcnNlZC5sYXN0X25hbWUpIHBhcnNlZERpc3BsYXlOYW1lID0gW3BhcnNlZC5maXJzdF9uYW1lLCBwYXJzZWQubGFzdF9uYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xyXG4gICAgICAgICAgICAgIC8vIGlmIHVzZXJuYW1lIGVtcHR5IGJ1dCBkaXNwbGF5IG5hbWUgYXZhaWxhYmxlLCB1c2UgdGhhdCBhcyB1c2VybmFtZSBhcyByZXF1ZXN0ZWRcclxuICAgICAgICAgICAgICBpZiAoIXBhcnNlZFVzZXJuYW1lICYmIHBhcnNlZERpc3BsYXlOYW1lKSBwYXJzZWRVc2VybmFtZSA9IHBhcnNlZERpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgLy8gaWdub3JlIHBhcnNlIGVycm9yc1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1t1cHNlcnRVc2VyQW5kU2NvcmVdIGZhaWxlZCB0byBwYXJzZSBpbml0RGF0YSB1c2VyIGZpZWxkJywgZXJyLCB1KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgLy8gaWdub3JlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluYWwgZmFsbGJhY2tzXHJcbiAgICBjb25zdCBmaW5hbFVzZXJuYW1lID0gcGFyc2VkVXNlcm5hbWUgPz8gYHVzZXItJHt1c2VySWR9YDtcclxuICAgIGNvbnN0IGZpbmFsRGlzcGxheU5hbWUgPSBwYXJzZWREaXNwbGF5TmFtZSA/PyBmaW5hbFVzZXJuYW1lO1xyXG4gICAgY29uc29sZS5sb2coJ1t1cHNlcnRVc2VyQW5kU2NvcmVdIHJlc29sdmVkIHVzZXIgaW5mbycsIHsgcGFyc2VkVXNlcm5hbWUsIHBhcnNlZERpc3BsYXlOYW1lLCBmaW5hbFVzZXJuYW1lLCBmaW5hbERpc3BsYXlOYW1lIH0pO1xyXG5cclxuICAgIGNvbnN0IFVQU0VSVF9VU0VSID0gYFxyXG4gICAgICBJTlNFUlQgSU5UTyB1c2VycyAoaWQsIHVzZXJuYW1lLCBkaXNwbGF5X25hbWUpXHJcbiAgICAgIFZBTFVFUyAoJDEsICQyLCAkMylcclxuICAgICAgT04gQ09ORkxJQ1QgKGlkKSBETyBVUERBVEUgU0VUXHJcbiAgICAgICAgdXNlcm5hbWUgPSBFWENMVURFRC51c2VybmFtZSxcclxuICAgICAgICBkaXNwbGF5X25hbWUgPSBFWENMVURFRC5kaXNwbGF5X25hbWVcclxuICAgICAgUkVUVVJOSU5HIGlkLCB1c2VybmFtZSwgZGlzcGxheV9uYW1lLCBjcmVhdGVkX2F0XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnN0IHVzZXJSZXMgPSBhd2FpdCBjbGllbnQucXVlcnkoVVBTRVJUX1VTRVIsIFt1c2VySWQsIGZpbmFsVXNlcm5hbWUsIGZpbmFsRGlzcGxheU5hbWVdKTtcclxuICAgIGNvbnNvbGUubG9nKCdbdXBzZXJ0VXNlckFuZFNjb3JlXSB1c2VyIHVwc2VydCByZXN1bHQgcm93czonLCB1c2VyUmVzLnJvd3MpO1xyXG5cclxuICAgIGNvbnN0IFVQU0VSVF9TQ09SRSA9IGBcclxuICAgICAgSU5TRVJUIElOVE8gZ2FtZV9zY29yZXMgKGdhbWVfaWQsIHVzZXJfaWQsIHVzZXJuYW1lLCBzY29yZSlcclxuICAgICAgVkFMVUVTICgkMSwgJDIsICQzLCAkNClcclxuICAgICAgT04gQ09ORkxJQ1QgKGdhbWVfaWQsIHVzZXJfaWQpXHJcbiAgICAgIERPIFVQREFURSBTRVQgc2NvcmUgPSBHUkVBVEVTVChnYW1lX3Njb3Jlcy5zY29yZSwgRVhDTFVERUQuc2NvcmUpLCB1c2VybmFtZSA9IEVYQ0xVREVELnVzZXJuYW1lLCByZWNvcmRlZF9hdCA9IENVUlJFTlRfVElNRVNUQU1QXHJcbiAgICAgIFJFVFVSTklORyBnYW1lX2lkLCB1c2VyX2lkLCB1c2VybmFtZSwgc2NvcmVcclxuICAgIGA7XHJcblxyXG4gICAgY29uc3Qgc2NvcmVSZXMgPSBhd2FpdCBjbGllbnQucXVlcnkoVVBTRVJUX1NDT1JFLCBbZ2FtZUlkLCB1c2VySWQsIGZpbmFsVXNlcm5hbWUsIHNjb3JlXSk7XHJcbiAgICBjb25zb2xlLmxvZygnW3Vwc2VydFVzZXJBbmRTY29yZV0gc2NvcmUgdXBzZXJ0IHJlc3VsdCByb3dzOicsIHNjb3JlUmVzLnJvd3MpO1xyXG5cclxuICAgIGF3YWl0IGNsaWVudC5xdWVyeSgnQ09NTUlUJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcjogdXNlclJlcy5yb3dzICYmIHVzZXJSZXMucm93c1swXSA/IHVzZXJSZXMucm93c1swXSA6IG51bGwsXHJcbiAgICAgIHNjb3JlOiBzY29yZVJlcy5yb3dzICYmIHNjb3JlUmVzLnJvd3NbMF0gPyBzY29yZVJlcy5yb3dzWzBdIDogbnVsbCxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgY2xpZW50LnF1ZXJ5KCdST0xMQkFDSycpO1xyXG4gICAgfSBjYXRjaCAoXykge1xyXG4gICAgICAvLyBpZ25vcmVcclxuICAgIH1cclxuICAgIHRocm93IGU7XHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIGNsaWVudC5yZWxlYXNlKCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoidVRBRXNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/actions/upsertUserAndScore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "upsertUserAndScoreAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$e1fa5d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["upsertUserAndScoreAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$upsertUserAndScore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/actions/upsertUserAndScore.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$e1fa5d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:e1fa5d [app-client] (ecmascript) <text/javascript>");
}),
"[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return _client.createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _client = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)"); //# sourceMappingURL=action-client-wrapper.js.map
}),
]);

//# sourceMappingURL=_acb653ee._.js.map