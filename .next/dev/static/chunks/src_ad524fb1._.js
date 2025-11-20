(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/LumberjackHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const LumberjackHeader = ({ title, onSlippageClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between w-full items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-h4 font-semibold font-clash text-white",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/LumberjackHeader.tsx",
            lineNumber: 10,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/LumberjackHeader.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = LumberjackHeader;
const __TURBOPACK__default__export__ = LumberjackHeader;
var _c;
__turbopack_context__.k.register(_c, "LumberjackHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LumberjackGame/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RESPONSIVE_CONFIG",
    ()=>RESPONSIVE_CONFIG
]);
const RESPONSIVE_CONFIG = {
    trunk: {
        width: "w-10 sm:w-12 md:w-18",
        widthPx: 48,
        widthSmPx: 64,
        widthMdPx: 72
    },
    segment: {
        height: "h-16 sm:h-20 md:h-24",
        heightPx: 64,
        heightSmPx: 80,
        heightMdPx: 100,
        maxVisible: 6
    },
    pattern: {
        heightPx: 400,
        heightSmPx: 500,
        heightMdPx: 800
    },
    bull: {
        container: "w-[200px] sm:w-[240px] md:w-[280px] h-[80px] sm:h-[100px] md:h-[120px]",
        sprite: "w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24",
        bottom: "bottom-12 sm:bottom-14 md:bottom-16",
        padding: "pl-3 sm:pl-8 md:pl-6",
        paddingRight: "pr-3 sm:pr-8 md:pr-6"
    },
    ui: {
        playButton: "w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28",
        chopButton: "w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32",
        chopButtonGap: "gap-12 sm:gap-16 md:gap-20",
        score: "text-3xl sm:text-4xl md:text-5xl",
        timerBar: "w-40 sm:w-48 md:w-64"
    },
    decoration: {
        island: "w-80 sm:w-80 md:w-110",
        bush: " w-22 sm:w-24 md:w-32",
        backgroundTree: "w-44 sm:w-44 md:w-44 sm:h-150",
        promoTable: "w-14 sm:w-20 md:w-28",
        positions: {
            island: "bottom-0 left-0 right-0",
            bush: "bottom-8 sm:bottom-8 md:bottom-10 left-0 right-0",
            bgLeft: "bottom-6 left-10 sm:left-30 md:left-30 sm:bottom-[-10] md:bottom-0",
            bgRight: "bottom-12 right-12 sm:right-30 md:right-30 sm:bottom-[-5] md:bottom-[-20]",
            promo: "bottom-14 right-4 sm:bottom-16 sm:right-36 md:bottom-20 md:right-40"
        }
    },
    branch: {
        scale: "scale-160 sm:scale-120 md:scale-110",
        topOffset: "-top-8 sm:-top-10 md:-top-12",
        topOffsetPx: -32,
        topOffsetSmPx: -40,
        topOffsetMdPx: -48,
        offsetLeft: 52,
        offsetLeftSm: 68,
        offsetLeftMd: 103,
        offsetRight: 12,
        offsetRightSm: 20,
        offsetRightMd: 31
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LumberjackGame/utils/treeGeneration.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateNewSegment",
    ()=>generateNewSegment,
    "generateStack",
    ()=>generateStack
]);
function generateStack(n) {
    // If running on the server during SSR, avoid randomness — render deterministic trunks only.
    // This prevents hydration mismatches if the generator is invoked during server rendering.
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const arr = [];
    for(let i = 0; i < n; i++){
        if (i === 0) {
            arr.push("trunk");
            continue;
        }
        const prev = arr[i - 1];
        const lookbackWindow = Math.min(8, i);
        let leftCount = 0;
        let rightCount = 0;
        let consecutiveTrunks = 0;
        for(let j = i - 1; j >= Math.max(0, i - lookbackWindow); j--){
            if (arr[j] === "branch-left") leftCount++;
            if (arr[j] === "branch-right") rightCount++;
        }
        for(let j = i - 1; j >= 0; j--){
            if (arr[j] === "trunk") {
                consecutiveTrunks++;
            } else {
                break;
            }
        }
        if (leftCount >= 4 || rightCount >= 4) {
            const forcedBranch = leftCount >= 4 ? "branch-right" : "branch-left";
            // Check if opposite side also has 3+ branches to prevent oscillation
            const oppositeSideCount = leftCount >= 4 ? rightCount : leftCount;
            if (oppositeSideCount >= 3) {
                // Both sides have many branches, force trunk instead
                arr.push("trunk");
            } else if (prev === "branch-left" && forcedBranch === "branch-right" || prev === "branch-right" && forcedBranch === "branch-left") {
                arr.push("trunk");
            } else {
                arr.push(forcedBranch);
            }
            continue;
        }
        if (consecutiveTrunks >= 3) {
            const newBranch = Math.random() > 0.5 ? "branch-left" : "branch-right";
            arr.push(newBranch);
            continue;
        }
        const place = Math.random();
        if (place < 0.6) {
            const newBranch = Math.random() > 0.5 ? "branch-left" : "branch-right";
            if (prev === "branch-left" && newBranch === "branch-right" || prev === "branch-right" && newBranch === "branch-left") {
                arr.push("trunk");
            } else {
                arr.push(newBranch);
            }
        } else {
            arr.push("trunk");
        }
    }
    return arr;
}
function generateNewSegment(currentSegments) {
    const prevBottom = currentSegments[currentSegments.length - 1];
    const place = Math.random();
    let add = "trunk";
    const lookbackWindow = Math.min(8, currentSegments.length);
    let leftCount = 0;
    let rightCount = 0;
    let consecutiveTrunks = 0;
    for(let j = currentSegments.length - 1; j >= Math.max(0, currentSegments.length - lookbackWindow); j--){
        if (currentSegments[j] === "branch-left") leftCount++;
        if (currentSegments[j] === "branch-right") rightCount++;
    }
    for(let j = currentSegments.length - 1; j >= 0; j--){
        if (currentSegments[j] === "trunk") {
            consecutiveTrunks++;
        } else {
            break;
        }
    }
    if (leftCount >= 4 || rightCount >= 4) {
        const forcedBranch = leftCount >= 4 ? "branch-right" : "branch-left";
        // Check if opposite side also has 3+ branches to prevent oscillation
        const oppositeSideCount = leftCount >= 4 ? rightCount : leftCount;
        if (oppositeSideCount >= 3) {
            // Both sides have many branches, force trunk instead
            add = "trunk";
        } else if (prevBottom === "branch-left" && forcedBranch === "branch-right" || prevBottom === "branch-right" && forcedBranch === "branch-left") {
            add = "trunk";
        } else {
            add = forcedBranch;
        }
    } else if (consecutiveTrunks >= 3) {
        const newBranch = Math.random() > 0.5 ? "branch-left" : "branch-right";
        add = newBranch;
    } else if (place < 0.6) {
        const newBranch = Math.random() > 0.5 ? "branch-left" : "branch-right";
        if (prevBottom === "branch-left" && newBranch === "branch-right" || prevBottom === "branch-right" && newBranch === "branch-left") {
            add = "trunk";
        } else {
            add = newBranch;
        }
    }
    return add;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LumberjackGame/hooks/useGameState.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGameState",
    ()=>useGameState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$utils$2f$treeGeneration$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/utils/treeGeneration.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/config.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useGameState() {
    _s();
    // Initialize with empty segments to avoid SSR/client hydration mismatch caused by random generation.
    const [segments, setSegments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [playerSide, setPlayerSide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("left");
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGameOver, setIsGameOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [flyingChunks, setFlyingChunks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [flyingBranches, setFlyingBranches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [bullState, setBullState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("standing");
    const [animationFrame, setAnimationFrame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [patternOffset, setPatternOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [levelNotification, setLevelNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isChoppingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastLevelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Start the game. If forceNew is true (used by Replay), always generate a new stack.
    const start = (forceNew = false)=>{
        setSegments((prev)=>forceNew || !prev || prev.length === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$utils$2f$treeGeneration$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateStack"])(15) : prev);
        setPlayerSide("left");
        setScore(0);
        setIsRunning(true);
        setIsGameOver(false);
        setFlyingChunks([]);
        setFlyingBranches([]);
        setBullState("standing");
        setPatternOffset(0);
        setLevelNotification(null);
        lastLevelRef.current = 0;
    };
    const pushFlyingChunk = (seg, side, branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx)=>{
        const id = Math.random().toString(36).slice(2);
        const startTime = Date.now();
        if (seg === "branch-left" || seg === "branch-right") {
            const isLeft = seg === "branch-left";
            const offsetX = isLeft ? branchOffsetLeftPx : branchOffsetRightPx;
            const offsetY = branchTopOffsetPx;
            setFlyingBranches((b)=>[
                    ...b,
                    {
                        id,
                        seg,
                        side,
                        t: startTime,
                        isLeft,
                        offsetX,
                        offsetY
                    }
                ]);
        } else {
            setFlyingChunks((c)=>[
                    ...c,
                    {
                        id,
                        seg,
                        side,
                        t: startTime
                    }
                ]);
        }
    };
    const handleChop = (side, branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx, setTimeRemaining)=>{
        if (!isRunning || isGameOver) return;
        if (isChoppingRef.current) return;
        isChoppingRef.current = true;
        setTimeout(()=>{
            isChoppingRef.current = false;
        }, 100);
        setPlayerSide(side);
        setBullState(side === "left" ? "leftChop" : "rightChop");
        setSegments((prev)=>{
            if (prev.length === 0) return prev;
            const bottom = prev[0];
            const nextAbove = prev.length > 1 ? prev[1] : null;
            if (bottom === `branch-${side}`) {
                pushFlyingChunk(bottom, side, branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx);
                setIsGameOver(true);
                setIsRunning(false);
                return prev;
            }
            if (nextAbove === `branch-${side}`) {
                pushFlyingChunk(bottom, side, branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx);
                setIsGameOver(true);
                setIsRunning(false);
                return prev;
            }
            const newArr = prev.slice(1);
            pushFlyingChunk(bottom, side, branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx);
            setPatternOffset((offset)=>offset + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].segment.heightPx / 2);
            if (newArr.length < 12) {
                const add = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$utils$2f$treeGeneration$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateNewSegment"])(newArr);
                newArr.push(add);
            }
            return newArr;
        });
        // Update score outside of setSegments to prevent double increment
        setScore((s)=>{
            const newScore = s + 1;
            // Calculate level based on score (every 20 points = 1 level)
            const level = Math.floor(newScore / 20);
            // Check if level increased
            if (level > lastLevelRef.current) {
                lastLevelRef.current = level;
                setLevelNotification(level);
                setTimeout(()=>setLevelNotification(null), 3000);
            }
            // Time bonus decreases with level. Reduce base bonus so each hit adds less time.
            // Start at 0.3s, decrease by 0.03s per level, with a lower cap of 0.1s.
            // Level 0: 0.30s, Level 1: 0.27s, Level 2: 0.24s, ... down to 0.10s min.
            let timeBonus = Math.max(0.1, 0.3 - level * 0.03);
            setTimeRemaining((t)=>Math.min(t + timeBonus, 7));
            return newScore;
        });
    };
    return {
        segments,
        playerSide,
        score,
        isRunning,
        isGameOver,
        flyingChunks,
        flyingBranches,
        bullState,
        levelNotification,
        animationFrame,
        patternOffset,
        setSegments,
        setPlayerSide,
        setScore,
        setIsRunning,
        setIsGameOver,
        setFlyingChunks,
        setFlyingBranches,
        setBullState,
        setAnimationFrame,
        setPatternOffset,
        start,
        handleChop
    };
}
_s(useGameState, "izKhQXlC96mOE1N2KK13frYp58Q=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LumberjackGame/hooks/useGameTimer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGameTimer",
    ()=>useGameTimer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useGameTimer(isRunning, isGameOver, score, setIsGameOver, setIsRunning) {
    _s();
    // Start with a shorter base time so the drain feels faster.
    const [timeRemaining, setTimeRemaining] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2.5);
    const timerIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const startingTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(2.5);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGameTimer.useEffect": ()=>{
            if (isRunning && !isGameOver) {
                // Calculate level based on score (every 20 points = 1 level)
                const level = Math.floor(score / 20);
                startTimeRef.current = Date.now();
                startingTimeRef.current = timeRemaining;
                timerIntervalRef.current = setInterval({
                    "useGameTimer.useEffect": ()=>{
                        const elapsedRealSeconds = (Date.now() - startTimeRef.current) / 1000;
                        // Drain faster: base drain 1.5s per real second, and increase with level.
                        const levelMultiplier = 1 + level * 0.2;
                        const drainRate = 1.5 * levelMultiplier;
                        const newTime = startingTimeRef.current - elapsedRealSeconds * drainRate;
                        if (newTime <= 0) {
                            setTimeRemaining(0);
                            setIsGameOver();
                            setIsRunning(false);
                            if (timerIntervalRef.current) {
                                clearInterval(timerIntervalRef.current);
                            }
                        } else {
                            setTimeRemaining(newTime);
                        }
                    }
                }["useGameTimer.useEffect"], 50);
                return ({
                    "useGameTimer.useEffect": ()=>{
                        if (timerIntervalRef.current) {
                            clearInterval(timerIntervalRef.current);
                        }
                    }
                })["useGameTimer.useEffect"];
            }
        }
    }["useGameTimer.useEffect"], [
        isRunning,
        isGameOver,
        score
    ]);
    return {
        timeRemaining,
        setTimeRemaining
    };
}
_s(useGameTimer, "kA2sQR8iuLtjjbqHdffUPrwv10c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LumberjackGame/hooks/useResponsiveBranches.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResponsiveBranches",
    ()=>useResponsiveBranches
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/config.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useResponsiveBranches() {
    _s();
    const [branchOffsetLeftPx, setBranchOffsetLeftPx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].branch.offsetLeft);
    const [branchOffsetRightPx, setBranchOffsetRightPx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].branch.offsetRight);
    const [branchTopOffsetPx, setBranchTopOffsetPx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].branch.topOffsetPx);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useResponsiveBranches.useEffect": ()=>{
            const update = {
                "useResponsiveBranches.useEffect.update": ()=>{
                    const w = window.innerWidth;
                    if (w >= 768) {
                        setBranchOffsetLeftPx(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].branch.offsetLeftMd ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].branch.offsetLeft);
                        setBranchOffsetRightPx(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].branch.offsetRightMd ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].branch.offsetRight);
                        setBranchTopOffsetPx(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].branch.topOffsetMdPx ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].branch.topOffsetPx);
                    } else if (w >= 640) {
                        setBranchOffsetLeftPx(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].branch.offsetLeftSm ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].branch.offsetLeft);
                        setBranchOffsetRightPx(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].branch.offsetRightSm ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].branch.offsetRight);
                        setBranchTopOffsetPx(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].branch.topOffsetSmPx ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].branch.topOffsetPx);
                    } else {
                        setBranchOffsetLeftPx(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].branch.offsetLeft ?? 0);
                        setBranchOffsetRightPx(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].branch.offsetRight ?? 0);
                        setBranchTopOffsetPx(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].branch.topOffsetPx ?? 0);
                    }
                }
            }["useResponsiveBranches.useEffect.update"];
            update();
            window.addEventListener("resize", update);
            return ({
                "useResponsiveBranches.useEffect": ()=>window.removeEventListener("resize", update)
            })["useResponsiveBranches.useEffect"];
        }
    }["useResponsiveBranches.useEffect"], []);
    return {
        branchOffsetLeftPx,
        branchOffsetRightPx,
        branchTopOffsetPx
    };
}
_s(useResponsiveBranches, "SbHapS2I7h/O5Ewx7cv7PymKRuM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LumberjackGame/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BULL_SPRITES",
    ()=>BULL_SPRITES,
    "IMAGE_PATHS",
    ()=>IMAGE_PATHS
]);
const IMAGE_PATHS = {
    trunkBackground: "/images/tree/trunk-background.svg",
    trunkPattern: "/images/tree/trunk-pattern.svg",
    branch: "/images/tree/branch_trunk.svg",
    flyingChunk: "/images/tree/tree_trunk.svg"
};
const BULL_SPRITES = {
    standingLeft: "/images/tree/bull_sprite000.svg",
    standingRight: "/images/tree/bull_sprite005.svg",
    leftChop: "/images/tree/bull_sprite001.svg",
    rightChop: "/images/tree/bull_sprite002.svg",
    gameOverLeft: "/images/tree/bull_sprite003.svg",
    gameOverRight: "/images/tree/bull_sprite004.svg"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LumberjackGame/components/TreeTrunk.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TreeTrunk",
    ()=>TreeTrunk
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/config.ts [app-client] (ecmascript)");
;
;
;
function TreeTrunk({ patternOffset }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].trunk.width} h-[150%]`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMAGE_PATHS"].trunkBackground,
                    alt: "trunk background",
                    className: "w-full h-full object-cover object-bottom",
                    draggable: false
                }, void 0, false, {
                    fileName: "[project]/src/components/LumberjackGame/components/TreeTrunk.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/LumberjackGame/components/TreeTrunk.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute left-1/2 transform -translate-x-1/2 pointer-events-none overflow-hidden ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].trunk.width} h-[150%] bottom-0`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 left-0 right-0 flex flex-col items-center",
                    style: {
                        transform: `translateY(${patternOffset % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].pattern.heightPx}px)`
                    },
                    children: Array.from({
                        length: Math.ceil((__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].segment.maxVisible * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].segment.heightPx + patternOffset) / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].pattern.heightPx) + 3
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMAGE_PATHS"].trunkPattern,
                            alt: "trunk pattern",
                            className: "w-full block",
                            style: {
                                height: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].pattern.heightPx}px`
                            },
                            draggable: false
                        }, i, false, {
                            fileName: "[project]/src/components/LumberjackGame/components/TreeTrunk.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/LumberjackGame/components/TreeTrunk.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/LumberjackGame/components/TreeTrunk.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = TreeTrunk;
var _c;
__turbopack_context__.k.register(_c, "TreeTrunk");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LumberjackGame/components/Branches.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Branches",
    ()=>Branches
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/config.ts [app-client] (ecmascript)");
;
;
;
function Branches({ visibleSegments, patternOffset, branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col-reverse items-center pointer-events-none ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].trunk.width} h-full`,
        children: visibleSegments.map((seg, idx)=>{
            const segmentBottomOffset = idx * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].segment.heightPx + patternOffset % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].segment.heightPx;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute flex items-center justify-center ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].trunk.width} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].segment.height}`,
                style: {
                    bottom: `${segmentBottomOffset}px`
                },
                children: (seg === "branch-left" || seg === "branch-right") && (()=>{
                    const isLeft = seg === "branch-left";
                    const imgClass = `absolute h-full w-auto object-contain ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].branch.scale} pointer-events-none select-none`;
                    const offsetX = isLeft ? branchOffsetLeftPx : branchOffsetRightPx;
                    const offsetY = branchTopOffsetPx;
                    const imgStyle = isLeft ? {
                        right: `50%`,
                        top: `${offsetY}px`,
                        transform: `scaleX(-1) translateX(${offsetX}px)`,
                        transformOrigin: 'right center'
                    } : {
                        left: `50%`,
                        top: `${offsetY}px`,
                        transform: `translateX(${offsetX}px)`,
                        transformOrigin: 'left center'
                    };
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMAGE_PATHS"].branch,
                        alt: isLeft ? "branch left" : "branch right",
                        className: imgClass,
                        style: imgStyle,
                        draggable: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/LumberjackGame/components/Branches.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this);
                })()
            }, idx, false, {
                fileName: "[project]/src/components/LumberjackGame/components/Branches.tsx",
                lineNumber: 20,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/LumberjackGame/components/Branches.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = Branches;
var _c;
__turbopack_context__.k.register(_c, "Branches");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LumberjackGame/components/BullCharacter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BullCharacter",
    ()=>BullCharacter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/config.ts [app-client] (ecmascript)");
;
;
;
function BullCharacter({ bullRef, playerSide, bullState, isGameOver }) {
    const bullAlignClass = playerSide === "left" ? `justify-start ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].bull.padding}` : `justify-end ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].bull.paddingRight}`;
    const getBullSprite = ()=>{
        if (bullState === "leftChop") return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BULL_SPRITES"].leftChop;
        if (bullState === "rightChop") return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BULL_SPRITES"].rightChop;
        if (bullState === "standing") {
            if (isGameOver) {
                return playerSide === "left" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BULL_SPRITES"].gameOverLeft : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BULL_SPRITES"].gameOverRight;
            }
            return playerSide === "left" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BULL_SPRITES"].standingLeft : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BULL_SPRITES"].standingRight;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BULL_SPRITES"].standingLeft;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `absolute ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].bull.bottom} left-0 right-0 flex justify-center pointer-events-none z-40`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: bullRef,
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].bull.container} flex items-center ${bullAlignClass}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: getBullSprite(),
                alt: "bull",
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].bull.sprite} object-contain select-none`,
                draggable: false
            }, void 0, false, {
                fileName: "[project]/src/components/LumberjackGame/components/BullCharacter.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/LumberjackGame/components/BullCharacter.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/LumberjackGame/components/BullCharacter.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = BullCharacter;
var _c;
__turbopack_context__.k.register(_c, "BullCharacter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LumberjackGame/components/FlyingObjects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlyingObjects",
    ()=>FlyingObjects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/config.ts [app-client] (ecmascript)");
;
;
;
function FlyingObjects({ flyingChunks, flyingBranches, patternOffset }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            flyingChunks.map((c)=>{
                const elapsed = Date.now() - c.t;
                const progress = Math.min(elapsed / 400, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const distance = easeOut * 180;
                const rotation = easeOut * 40;
                const opacity = Math.max(0, 1 - progress);
                const flight = c.side === "left" ? `translate(${distance}px, ${-distance * 0.3}px) rotate(${rotation}deg)` : `translate(${-distance}px, ${-distance * 0.3}px) rotate(${-rotation}deg)`;
                const startingBottom = patternOffset % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].segment.heightPx + 50;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute pointer-events-none z-30 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].trunk.width} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].segment.height}`,
                    style: {
                        bottom: `${startingBottom}px`,
                        left: "50%",
                        transform: `translateX(-50%) ${flight}`,
                        opacity
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMAGE_PATHS"].flyingChunk,
                        alt: "flying chunk",
                        className: "w-full h-full object-contain select-none",
                        draggable: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/LumberjackGame/components/FlyingObjects.tsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this)
                }, c.id, false, {
                    fileName: "[project]/src/components/LumberjackGame/components/FlyingObjects.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, this);
            }),
            flyingBranches.map((b)=>{
                const elapsed = Date.now() - b.t;
                const progress = Math.min(elapsed / 600, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const distance = easeOut * 150;
                const rotation = easeOut * 60;
                const fadeStart = 0.4;
                const fadeProgress = Math.max(0, (progress - fadeStart) / (1 - fadeStart));
                const opacity = Math.max(0, 1 - fadeProgress);
                const flightTransform = b.isLeft ? `translate(${distance}px, ${-distance * 0.4}px) rotate(${rotation}deg)` : `translate(${distance}px, ${-distance * 0.4}px) rotate(${rotation}deg)`;
                const startingBottom = patternOffset % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].segment.heightPx;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute flex items-center justify-center pointer-events-none z-30 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].trunk.width} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].segment.height}`,
                    style: {
                        bottom: `${startingBottom}px`,
                        left: "50%",
                        transform: "translateX(-50%)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMAGE_PATHS"].branch,
                        alt: "flying branch",
                        className: `absolute h-full w-auto object-contain ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].branch.scale} pointer-events-none select-none`,
                        style: {
                            ...b.isLeft ? {
                                right: `50%`,
                                top: `${b.offsetY}px`,
                                transform: `scaleX(-1) translateX(${b.offsetX}px) ${flightTransform}`,
                                transformOrigin: 'right center'
                            } : {
                                left: `50%`,
                                top: `${b.offsetY}px`,
                                transform: `translateX(${b.offsetX}px) ${flightTransform}`,
                                transformOrigin: 'left center'
                            },
                            opacity
                        },
                        draggable: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/LumberjackGame/components/FlyingObjects.tsx",
                        lineNumber: 81,
                        columnNumber: 13
                    }, this)
                }, b.id, false, {
                    fileName: "[project]/src/components/LumberjackGame/components/FlyingObjects.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true);
}
_c = FlyingObjects;
var _c;
__turbopack_context__.k.register(_c, "FlyingObjects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LumberjackGame/components/GameOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameOverlay",
    ()=>GameOverlay
]);
function GameOverlay({ isGameOver }) {
    //   if (isGameOver) {
    //     return (
    //       <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
    //         <div className="bg-black/60 backdrop-blur-sm rounded-lg px-6 py-4 text-center">
    //           <div className="text-2xl font-clash font-semibold">Game Over</div>
    //         </div>
    //       </div>
    //     );
    //   }
    return null;
}
_c = GameOverlay;
var _c;
__turbopack_context__.k.register(_c, "GameOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LumberjackGame/components/DecorativeElements.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DecorativeElements",
    ()=>DecorativeElements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/config.ts [app-client] (ecmascript)");
;
;
function DecorativeElements() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].decoration.positions.bgLeft} pointer-events-none z-5`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/images/tree/background-tree.svg",
                    alt: "Background tree left",
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].decoration.backgroundTree} h-auto opacity-100 transform scale-x-[-1]`,
                    draggable: false
                }, void 0, false, {
                    fileName: "[project]/src/components/LumberjackGame/components/DecorativeElements.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/LumberjackGame/components/DecorativeElements.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].decoration.positions.bgRight} pointer-events-none z-5`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/images/tree/background-tree.svg",
                    alt: "Background tree right",
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].decoration.backgroundTree} h-auto opacity-100`,
                    draggable: false
                }, void 0, false, {
                    fileName: "[project]/src/components/LumberjackGame/components/DecorativeElements.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/LumberjackGame/components/DecorativeElements.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].decoration.positions.island} flex justify-center pointer-events-none z-10`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/images/tree/island.svg",
                    alt: "Platform",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].decoration.island,
                    draggable: false
                }, void 0, false, {
                    fileName: "[project]/src/components/LumberjackGame/components/DecorativeElements.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/LumberjackGame/components/DecorativeElements.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].decoration.positions.promo} pointer-events-none z-15`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/images/tree/promo-table.svg",
                    alt: "Promo table",
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].decoration.promoTable} h-auto select-none`,
                    draggable: false
                }, void 0, false, {
                    fileName: "[project]/src/components/LumberjackGame/components/DecorativeElements.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/LumberjackGame/components/DecorativeElements.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].decoration.positions.bush} flex justify-center pointer-events-none`,
                style: {
                    zIndex: 50
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/images/tree/bush.svg",
                    alt: "Bush",
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].decoration.bush} h-auto select-none`,
                    draggable: false
                }, void 0, false, {
                    fileName: "[project]/src/components/LumberjackGame/components/DecorativeElements.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/LumberjackGame/components/DecorativeElements.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = DecorativeElements;
var _c;
__turbopack_context__.k.register(_c, "DecorativeElements");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LumberjackGame/components/GameHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameHeader",
    ()=>GameHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/config.ts [app-client] (ecmascript)");
;
;
function GameHeader({ isRunning, isGameOver, timeRemaining, score, visible = true, levelNotification }) {
    // Hide header when explicitly not visible or when the game isn't running and not over
    if (!visible || !isRunning && !isGameOver) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center gap-3",
        style: {
            top: "10%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#1A1A1A] rounded-full px-4 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].ui.timerBar} h-3 rounded-full border-2 overflow-hidden bg-[#1A1A1A]`,
                    style: {
                        borderColor: '#00FFE5'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full transition-all duration-100 ease-linear rounded-full",
                        style: {
                            width: `${timeRemaining / 7 * 100}%`,
                            backgroundColor: '#00FFE580'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/LumberjackGame/components/GameHeader.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/LumberjackGame/components/GameHeader.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/LumberjackGame/components/GameHeader.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl font-semibold text-white drop-shadow-lg mb-1 text-center truncate pr-0",
                        children: score
                    }, void 0, false, {
                        fileName: "[project]/src/components/LumberjackGame/components/GameHeader.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/tree/points-logo.svg",
                        alt: "points",
                        className: "ml-3 w-10 h-10"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LumberjackGame/components/GameHeader.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LumberjackGame/components/GameHeader.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            levelNotification !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl sm:text-3xl md:text-4xl font-clash font-bold text-[#00FFE5] drop-shadow-lg animate-pulse",
                children: [
                    "Level ",
                    levelNotification
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LumberjackGame/components/GameHeader.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LumberjackGame/components/GameHeader.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = GameHeader;
var _c;
__turbopack_context__.k.register(_c, "GameHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LumberjackGame/components/Leaderboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Leaderboard",
    ()=>Leaderboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TelegramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TelegramProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function Leaderboard({ visible, isGameOver, currentScore, scoreSubmitted }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { getLeaderboardWindow, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TelegramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelegram"])();
    const [serverTop, setServerTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [serverWindow, setServerWindow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [serverTotal, setServerTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [serverRank, setServerRank] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Leaderboard.useEffect": ()=>setMounted(true)
    }["Leaderboard.useEffect"], []);
    // fetch leaderboard window from server when visible.
    // Special-case: if the leaderboard is visible because the game just ended (isGameOver)
    // and the parent passed `scoreSubmitted` which is still false, wait for the submission
    // to complete to avoid the race. Otherwise fetch immediately (e.g. first-open).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Leaderboard.useEffect": ()=>{
            if (!visible) return;
            if (isGameOver && typeof scoreSubmitted !== 'undefined' && !scoreSubmitted) return;
            let cancelled = false;
            ({
                "Leaderboard.useEffect": async ()=>{
                    try {
                        const data = await getLeaderboardWindow('lumberjack', user?.id ? String(user.id) : undefined, 5, 5, 5);
                        if (cancelled) return;
                        if (data) {
                            console.log('[Leaderboard] fetched data from server:', data);
                            const mapRow = {
                                "Leaderboard.useEffect.mapRow": (r)=>({
                                        name: r.username ?? r.name ?? 'Unknown',
                                        score: r.high_score ?? r.score ?? 0,
                                        rn: typeof r.rn === 'number' ? r.rn : undefined,
                                        userId: r.user_id !== undefined && r.user_id !== null ? String(r.user_id) : undefined
                                    })
                            }["Leaderboard.useEffect.mapRow"];
                            if (Array.isArray(data.top)) setServerTop(data.top.map(mapRow));
                            if (Array.isArray(data.window)) setServerWindow(data.window.map(mapRow));
                            if (typeof data.total === 'number') setServerTotal(data.total);
                            if (typeof data.rank === 'number') setServerRank(data.rank);
                        }
                    } catch (e) {
                        console.warn('Failed to fetch leaderboard-window from server', e);
                    }
                }
            })["Leaderboard.useEffect"]();
            return ({
                "Leaderboard.useEffect": ()=>{
                    cancelled = true;
                }
            })["Leaderboard.useEffect"];
        }
    }["Leaderboard.useEffect"], [
        visible,
        isGameOver,
        scoreSubmitted,
        getLeaderboardWindow,
        user?.id
    ]);
    if (!mounted) return null;
    if (!visible) return null;
    const top = serverTop.slice(0, 5);
    const currentUserId = user?.id ? String(user.id) : undefined;
    const shouldShowYou = typeof serverRank === 'number' && serverRank > top.length;
    let youEntry;
    if (shouldShowYou && serverWindow.length > 0) {
        youEntry = serverWindow.find((r)=>typeof r.rn === 'number' ? r.rn === serverRank : r.userId && currentUserId ? String(r.userId) === currentUserId : false);
    }
    // If server indicates the player is outside top, but the returned window didn't include them,
    // fetch a tight window (before=0, after=0) to get just the user's row.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-80 flex items-center justify-center pointer-events-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-transparent backdrop-blur-sm rounded-xl p-6 w-[320px] sm:w-[420px] lg:w-[520px] text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold",
                            children: "Leaderboard"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-white/80",
                            children: "Top 5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        top.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-white/70",
                            children: "No scores yet — be the first!"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                            lineNumber: 90,
                            columnNumber: 32
                        }, this),
                        top.map((e, i)=>{
                            const pos = i + 1;
                            const posColor = pos === 1 ? '#FFD700' : pos === 2 ? '#C0C0C0' : pos === 3 ? '#CD7F32' : '#00FFE5';
                            const isCurrent = currentUserId && e.userId && String(e.userId) === currentUserId;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between w-full h-[34px] rounded-[12px] opacity-100 border-b border-white/10 p-[6px] bg-[color:var(--color-black-2)]",
                                style: {
                                    transform: 'rotate(0deg)',
                                    background: isCurrent ? 'color-mix(in srgb, var(--color-black-2) 85%, white 15%)' : undefined
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center font-medium text-sm truncate pl-[10px] py-[10px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '20px',
                                                    textAlign: 'center',
                                                    marginRight: '8px',
                                                    fontWeight: 700,
                                                    color: posColor
                                                },
                                                children: pos
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                                                lineNumber: 102,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "truncate",
                                                children: e.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                                                lineNumber: 103,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                                        lineNumber: 101,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-4",
                                        style: {
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
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#000',
                                                    fontWeight: 700,
                                                    fontSize: '0.875rem'
                                                },
                                                children: e.score
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                                                lineNumber: 123,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/images/tree/points-logo-black.svg",
                                                alt: "points",
                                                style: {
                                                    width: '16px',
                                                    height: '16px',
                                                    display: 'block'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                                                lineNumber: 124,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                                        lineNumber: 106,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                                lineNumber: 96,
                                columnNumber: 17
                            }, this);
                        }),
                        youEntry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[10px]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: (()=>{
                                        const e = youEntry;
                                        const pos = typeof e.rn === 'number' ? e.rn : 0;
                                        const posColor = pos === 1 ? '#FFD700' : pos === 2 ? '#C0C0C0' : pos === 3 ? '#CD7F32' : '#00FFE5';
                                        const isCurrent = currentUserId && e.userId && String(e.userId) === currentUserId;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between w-full h-[34px] rounded-[12px] opacity-100 border-b border-white/10 p-[6px] bg-[color:var(--color-black-2)]",
                                            style: {
                                                transform: 'rotate(0deg)',
                                                background: isCurrent ? 'color-mix(in srgb, var(--color-black-2) 85%, white 15%)' : undefined
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center font-medium text-sm truncate pl-[10px] py-[10px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: '20px',
                                                                textAlign: 'center',
                                                                marginRight: '8px',
                                                                fontWeight: 700,
                                                                color: posColor
                                                            },
                                                            children: pos
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "truncate",
                                                            children: e.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "ml-4",
                                                    style: {
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
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: '#000',
                                                                fontWeight: 700,
                                                                fontSize: '0.875rem'
                                                            },
                                                            children: e.score
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/images/tree/points-logo-black.svg",
                                                            alt: "points",
                                                            style: {
                                                                width: '16px',
                                                                height: '16px',
                                                                display: 'block'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, `you-${pos}-${e.name}-${e.score}`, true, {
                                            fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                                            lineNumber: 145,
                                            columnNumber: 21
                                        }, this);
                                    })()
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                isGameOver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-white/80",
                            children: "Your score"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                            lineNumber: 190,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl font-bold mt-1",
                            children: currentScore
                        }, void 0, false, {
                            fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
                    lineNumber: 189,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/LumberjackGame/components/Leaderboard.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(Leaderboard, "m3x/cBIrMD+scd0QvIs070eyO30=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TelegramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelegram"]
    ];
});
_c = Leaderboard;
var _c;
__turbopack_context__.k.register(_c, "Leaderboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LumberjackGame/components/Playfield.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Playfield",
    ()=>Playfield
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$components$2f$TreeTrunk$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/components/TreeTrunk.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$components$2f$Branches$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/components/Branches.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$components$2f$BullCharacter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/components/BullCharacter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$components$2f$FlyingObjects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/components/FlyingObjects.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$components$2f$GameOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/components/GameOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$components$2f$DecorativeElements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/components/DecorativeElements.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$components$2f$GameHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/components/GameHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$components$2f$Leaderboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/components/Leaderboard.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
function Playfield({ playfieldRef, bullRef, visibleSegments, patternOffset, playerSide, bullState, isGameOver, isRunning, flyingChunks, flyingBranches, branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx, timeRemaining, score, levelNotification, onPlayfieldClick, scoreSubmitted }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: playfieldRef,
        onClick: onPlayfieldClick,
        className: "relative w-full rounded-xl overflow-hidden cursor-pointer shadow-lg border border-white/5 bg-transparent h-[48vh] max-h-[520px]",
        children: [
            (()=>{
                const leaderboardVisible = !isRunning || isGameOver;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$components$2f$GameHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameHeader"], {
                            isRunning: isRunning,
                            isGameOver: isGameOver,
                            timeRemaining: timeRemaining,
                            score: score,
                            visible: !leaderboardVisible,
                            levelNotification: levelNotification
                        }, void 0, false, {
                            fileName: "[project]/src/components/LumberjackGame/components/Playfield.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$components$2f$Leaderboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Leaderboard"], {
                            visible: leaderboardVisible,
                            isGameOver: isGameOver,
                            currentScore: score,
                            scoreSubmitted: scoreSubmitted
                        }, void 0, false, {
                            fileName: "[project]/src/components/LumberjackGame/components/Playfield.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this),
                        !leaderboardVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$components$2f$GameOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameOverlay"], {
                            isGameOver: isGameOver
                        }, void 0, false, {
                            fileName: "[project]/src/components/LumberjackGame/components/Playfield.tsx",
                            lineNumber: 67,
                            columnNumber: 37
                        }, this)
                    ]
                }, void 0, true);
            })(),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `relative flex items-center justify-center ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].trunk.width} h-4/5`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$components$2f$TreeTrunk$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TreeTrunk"], {
                            patternOffset: patternOffset
                        }, void 0, false, {
                            fileName: "[project]/src/components/LumberjackGame/components/Playfield.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$components$2f$Branches$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Branches"], {
                            visibleSegments: visibleSegments,
                            patternOffset: patternOffset,
                            branchOffsetLeftPx: branchOffsetLeftPx,
                            branchOffsetRightPx: branchOffsetRightPx,
                            branchTopOffsetPx: branchTopOffsetPx
                        }, void 0, false, {
                            fileName: "[project]/src/components/LumberjackGame/components/Playfield.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LumberjackGame/components/Playfield.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/LumberjackGame/components/Playfield.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$components$2f$DecorativeElements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecorativeElements"], {}, void 0, false, {
                fileName: "[project]/src/components/LumberjackGame/components/Playfield.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$components$2f$BullCharacter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BullCharacter"], {
                bullRef: bullRef,
                playerSide: playerSide,
                bullState: bullState,
                isGameOver: isGameOver
            }, void 0, false, {
                fileName: "[project]/src/components/LumberjackGame/components/Playfield.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$components$2f$FlyingObjects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlyingObjects"], {
                flyingChunks: flyingChunks,
                flyingBranches: flyingBranches,
                patternOffset: patternOffset
            }, void 0, false, {
                fileName: "[project]/src/components/LumberjackGame/components/Playfield.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LumberjackGame/components/Playfield.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c = Playfield;
var _c;
__turbopack_context__.k.register(_c, "Playfield");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LumberjackGame/components/ControlButtons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ControlButtons",
    ()=>ControlButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/config.ts [app-client] (ecmascript)");
;
;
function ControlButtons({ isRunning, isGameOver, onChop, onStart }) {
    // Show play button before game starts
    if (!isRunning && !isGameOver) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: (e)=>{
                        e.stopPropagation();
                        onStart();
                    },
                    "aria-label": "Start game",
                    className: "rounded-full bg-transparent group transition-all duration-150 active:scale-90",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/tree/bg-large.svg",
                        alt: "Start game",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].ui.playButton} cursor-pointer`,
                        draggable: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/LumberjackGame/components/ControlButtons.tsx",
                        lineNumber: 27,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/LumberjackGame/components/ControlButtons.tsx",
                    lineNumber: 19,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/LumberjackGame/components/ControlButtons.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/LumberjackGame/components/ControlButtons.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this);
    }
    // Show replay button after game over
    if (isGameOver) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: (e)=>{
                        e.stopPropagation();
                        // Replay should generate a new stack
                        onStart(true);
                    },
                    "aria-label": "Replay game",
                    className: "rounded-full bg-transparent group transition-all duration-150 active:scale-90",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/tree/refresh-circle.svg",
                        alt: "Replay game",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].ui.playButton} cursor-pointer`,
                        draggable: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/LumberjackGame/components/ControlButtons.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/LumberjackGame/components/ControlButtons.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/LumberjackGame/components/ControlButtons.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/LumberjackGame/components/ControlButtons.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    }
    // Show L/R buttons during gameplay
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex items-center justify-center ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].ui.chopButtonGap}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: (e)=>{
                        e.stopPropagation();
                        onChop("left");
                    },
                    "aria-label": "Chop left",
                    className: "rounded-full bg-transparent group transition-all duration-150 active:scale-90",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `inline-flex items-center justify-center rounded-full ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].ui.chopButton} transition-all duration-150 group-active:bg-[#00ffe5]/20`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/tree/left-circle.svg",
                            alt: "Chop left",
                            className: "w-full h-full",
                            draggable: false
                        }, void 0, false, {
                            fileName: "[project]/src/components/LumberjackGame/components/ControlButtons.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/LumberjackGame/components/ControlButtons.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/LumberjackGame/components/ControlButtons.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: (e)=>{
                        e.stopPropagation();
                        onChop("right");
                    },
                    "aria-label": "Chop right",
                    className: "rounded-full bg-transparent group transition-all duration-150 active:scale-90",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `inline-flex items-center justify-center rounded-full ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].ui.chopButton} transition-all duration-150 group-active:bg-[#00ffe5]/20`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/tree/right-circle.svg",
                            alt: "Chop right",
                            className: "w-full h-full",
                            draggable: false
                        }, void 0, false, {
                            fileName: "[project]/src/components/LumberjackGame/components/ControlButtons.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/LumberjackGame/components/ControlButtons.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/LumberjackGame/components/ControlButtons.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LumberjackGame/components/ControlButtons.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/LumberjackGame/components/ControlButtons.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_c = ControlButtons;
var _c;
__turbopack_context__.k.register(_c, "ControlButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LumberjackGame/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LumberjackGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$hooks$2f$useGameState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/hooks/useGameState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$hooks$2f$useGameTimer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/hooks/useGameTimer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$hooks$2f$useResponsiveBranches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/hooks/useResponsiveBranches.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$components$2f$Playfield$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/components/Playfield.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$components$2f$ControlButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/components/ControlButtons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TelegramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TelegramProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function LumberjackGame() {
    _s();
    const { initData, user, sendScore } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TelegramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelegram"])();
    const scoreSentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [scoreSubmitted, setScoreSubmitted] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const { segments, playerSide, score, isRunning, isGameOver, flyingChunks, flyingBranches, bullState, animationFrame, patternOffset, levelNotification, setFlyingChunks, setFlyingBranches, setBullState, setAnimationFrame, setIsGameOver, setIsRunning, start, handleChop } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$hooks$2f$useGameState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameState"])();
    const { timeRemaining, setTimeRemaining } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$hooks$2f$useGameTimer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameTimer"])(isRunning, isGameOver, score, {
        "LumberjackGame.useGameTimer": ()=>setIsGameOver(true)
    }["LumberjackGame.useGameTimer"], setIsRunning);
    // Wrapper to start the game and reset the timer. Pass forceNew=true to regenerate the tree (replay).
    const doStart = (forceNew = false)=>{
        start(forceNew);
        // reset flag so a new score can be sent for the next run
        scoreSentRef.current = false;
        setScoreSubmitted(false);
        // reset timer to starting value (2.5 seconds)
        setTimeRemaining(2.5);
    };
    // When the game ends, send the score to the backend once.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LumberjackGame.useEffect": ()=>{
            if (!isGameOver) return;
            if (scoreSentRef.current) return;
            scoreSentRef.current = true;
            ({
                "LumberjackGame.useEffect": async ()=>{
                    try {
                        await sendScore("lumberjack", score);
                        setScoreSubmitted(true);
                    } catch (err) {
                        // don't block UX on leaderboard failures; log for debugging
                        console.error("Failed to submit score", err);
                        // still allow leaderboard to fetch after a short delay as fallback
                        setTimeout({
                            "LumberjackGame.useEffect": ()=>setScoreSubmitted(true)
                        }["LumberjackGame.useEffect"], 200);
                    }
                }
            })["LumberjackGame.useEffect"]();
        }
    }["LumberjackGame.useEffect"], [
        isGameOver,
        score,
        sendScore
    ]);
    const { branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$hooks$2f$useResponsiveBranches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveBranches"])();
    const bullRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const playfieldRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LumberjackGame.useEffect": ()=>{
            const onKey = {
                "LumberjackGame.useEffect.onKey": (e)=>{
                    if (!isRunning && (e.key === "ArrowLeft" || e.key === "ArrowRight")) doStart(isGameOver ? true : false);
                    if (!isRunning) return;
                    if (e.key === "ArrowLeft") handleChop("left", branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx, setTimeRemaining);
                    if (e.key === "ArrowRight") handleChop("right", branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx, setTimeRemaining);
                }
            }["LumberjackGame.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            return ({
                "LumberjackGame.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["LumberjackGame.useEffect"];
        }
    }["LumberjackGame.useEffect"], [
        isRunning,
        branchOffsetLeftPx,
        branchOffsetRightPx,
        branchTopOffsetPx,
        handleChop,
        setTimeRemaining,
        start
    ]);
    // No auto-start: the game should not start automatically when opened from the webapp link.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LumberjackGame.useEffect": ()=>{
            const t = setInterval({
                "LumberjackGame.useEffect.t": ()=>{
                    setFlyingChunks({
                        "LumberjackGame.useEffect.t": (c)=>c.filter({
                                "LumberjackGame.useEffect.t": (x)=>Date.now() - x.t < 500
                            }["LumberjackGame.useEffect.t"])
                    }["LumberjackGame.useEffect.t"]);
                    setFlyingBranches({
                        "LumberjackGame.useEffect.t": (b)=>b.filter({
                                "LumberjackGame.useEffect.t": (x)=>Date.now() - x.t < 350
                            }["LumberjackGame.useEffect.t"])
                    }["LumberjackGame.useEffect.t"]);
                }
            }["LumberjackGame.useEffect.t"], 100);
            return ({
                "LumberjackGame.useEffect": ()=>clearInterval(t)
            })["LumberjackGame.useEffect"];
        }
    }["LumberjackGame.useEffect"], [
        setFlyingChunks,
        setFlyingBranches
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LumberjackGame.useEffect": ()=>{
            let rafId;
            const animate = {
                "LumberjackGame.useEffect.animate": ()=>{
                    setAnimationFrame({
                        "LumberjackGame.useEffect.animate": (f)=>f + 1
                    }["LumberjackGame.useEffect.animate"]);
                    rafId = requestAnimationFrame(animate);
                }
            }["LumberjackGame.useEffect.animate"];
            if (flyingChunks.length > 0 || flyingBranches.length > 0) {
                rafId = requestAnimationFrame(animate);
            }
            return ({
                "LumberjackGame.useEffect": ()=>{
                    if (rafId) cancelAnimationFrame(rafId);
                }
            })["LumberjackGame.useEffect"];
        }
    }["LumberjackGame.useEffect"], [
        flyingChunks.length,
        flyingBranches.length,
        setAnimationFrame
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LumberjackGame.useEffect": ()=>{
            if (bullState === "leftChop" || bullState === "rightChop") {
                const timer = setTimeout({
                    "LumberjackGame.useEffect.timer": ()=>{
                        setBullState("standing");
                    }
                }["LumberjackGame.useEffect.timer"], 200);
                return ({
                    "LumberjackGame.useEffect": ()=>clearTimeout(timer)
                })["LumberjackGame.useEffect"];
            }
        }
    }["LumberjackGame.useEffect"], [
        bullState,
        setBullState
    ]);
    function handlePlayfieldClick(e) {
        if (!playfieldRef.current) return;
        const rect = playfieldRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const centerX = rect.width / 2;
        if (!isRunning) {
            doStart();
            return;
        }
        if (clickX < centerX) {
            handleChop("left", branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx, setTimeRemaining);
        } else {
            handleChop("right", branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx, setTimeRemaining);
        }
    }
    const visibleSegments = segments.slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESPONSIVE_CONFIG"].segment.maxVisible);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto w-full px-4 sm:px-6 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "Lumberjack",
                    onSlippageClick: ()=>{}
                }, void 0, false, {
                    fileName: "[project]/src/components/LumberjackGame/index.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/LumberjackGame/index.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col max-w-4xl mx-auto w-full px-4 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$components$2f$Playfield$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Playfield"], {
                        playfieldRef: playfieldRef,
                        bullRef: bullRef,
                        visibleSegments: visibleSegments,
                        patternOffset: patternOffset,
                        playerSide: playerSide,
                        bullState: bullState,
                        isGameOver: isGameOver,
                        isRunning: isRunning,
                        flyingChunks: flyingChunks,
                        flyingBranches: flyingBranches,
                        branchOffsetLeftPx: branchOffsetLeftPx,
                        branchOffsetRightPx: branchOffsetRightPx,
                        branchTopOffsetPx: branchTopOffsetPx,
                        timeRemaining: timeRemaining,
                        score: score,
                        levelNotification: levelNotification,
                        onPlayfieldClick: handlePlayfieldClick,
                        scoreSubmitted: scoreSubmitted
                    }, void 0, false, {
                        fileName: "[project]/src/components/LumberjackGame/index.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$components$2f$ControlButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ControlButtons"], {
                            isRunning: isRunning,
                            isGameOver: isGameOver,
                            onChop: (side)=>handleChop(side, branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx, setTimeRemaining),
                            onStart: doStart
                        }, void 0, false, {
                            fileName: "[project]/src/components/LumberjackGame/index.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/LumberjackGame/index.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LumberjackGame/index.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(LumberjackGame, "82NovvXnguBWPJ+2nRMlARNOKWo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TelegramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelegram"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$hooks$2f$useGameState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$hooks$2f$useGameTimer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameTimer"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$hooks$2f$useResponsiveBranches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveBranches"]
    ];
});
_c = LumberjackGame;
var _c;
__turbopack_context__.k.register(_c, "LumberjackGame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/lumberjack/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LumberjackPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LumberjackGame/index.tsx [app-client] (ecmascript)"); // use relative path to components
"use client";
;
;
function LumberjackPage() {
    // The main page uses a flex layout to ensure consistent sizing
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LumberjackGame$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/lumberjack/page.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/lumberjack/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = LumberjackPage;
var _c;
__turbopack_context__.k.register(_c, "LumberjackPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_ad524fb1._.js.map