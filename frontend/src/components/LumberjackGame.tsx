
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTelegram } from "./TelegramProvider";
import LumberjackHeader from "./LumberjackHeader";

type Segment = "trunk" | "branch-left" | "branch-right";

const IMAGE_PATHS = {
  trunkBackground: "/images/tree/trunk-background.svg",
  trunkPattern: "/images/tree/trunk-pattern.svg",
  branch: "/images/tree/branch_trunk.svg",
  flyingChunk: "/images/tree/tree_trunk.svg", // keep old trunk for flying animation
};

const BULL_SPRITES = {
  standingLeft: "/images/tree/bull_sprite000.svg",
  standingRight: "/images/tree/bull_sprite005.svg",
  leftChop: "/images/tree/bull_sprite001.svg",
  rightChop: "/images/tree/bull_sprite002.svg",
  gameOverLeft: "/images/tree/bull_sprite003.svg",
  gameOverRight: "/images/tree/bull_sprite004.svg",
};

// Centralized responsive configuration - easy to adjust all sizing here
const RESPONSIVE_CONFIG = {
  // Trunk sizing
  trunk: {
    width: "w-10 sm:w-12 md:w-18", // width of tree trunk
    widthPx: 48, // base width in pixels (for calculations)
    widthSmPx: 64, // sm breakpoint width
    widthMdPx: 72, // md breakpoint width
  },
  // Segment/branch sizing
  segment: {
    height: "h-16 sm:h-20 md:h-24", // height of each tree segment
    heightPx: 64, // base height in pixels
    heightSmPx: 80,
    heightMdPx: 100,
    maxVisible: 6, // max visible segments
  },
  // Pattern sizing
  pattern: {
    heightPx: 400, // height of repeating pattern texture
    heightSmPx: 500,
    heightMdPx: 800,
  },
  // Bull sizing and positioning
  bull: {
    container: "w-[200px] sm:w-[240px] md:w-[280px] h-[80px] sm:h-[100px] md:h-[120px]",
    sprite: "w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24",
    bottom: "bottom-12 sm:bottom-14 md:bottom-16",
    padding: "pl-3 sm:pl-8 md:pl-6", // left side padding
    paddingRight: "pr-3 sm:pr-8 md:pr-6", // right side padding
  },
  // UI elements
  ui: {
    playButton: "w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28",
    chopButton: "w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32",
    chopButtonGap: "gap-12 sm:gap-16 md:gap-20",
    score: "text-3xl sm:text-4xl md:text-5xl",
    timerBar: "w-40 sm:w-48 md:w-64",
  },
  // Decorative elements
  decoration: {
    island: "w-80 sm:w-80 md:w-110",
    bush: " w-22 sm:w-24 md:w-32",
    backgroundTree: "w-44 sm:w-44 md:w-44 sm:h-150",
    positions: {
      // island keeps same baseline position but can be adjusted per breakpoint
      island: "bottom-0 left-0 right-0",
      // raise the bush higher on md by increasing bottom offset (bottom-6 -> md:bottom-12)
      bush: "bottom-8 sm:bottom-8 md:bottom-10 left-0 right-0",
      // background trees (left/right). Keep hidden on xs, visible on sm+ (existing markup)
      bgLeft: "bottom-6 left-10 sm:left-30 md:left-30 sm:bottom-[-10] md:bottom-0",
      bgRight: "bottom-12 right-10 sm:right-30 md:right-30 sm:bottom-[-5] md:bottom-[-20]",
    },
  },
  // Branch sizing
  branch: {
    scale: "scale-160 sm:scale-120 md:scale-110",
    topOffset: "-top-8 sm:-top-10 md:-top-12", // move branches up from their segment
    topOffsetPx: -32, // base top offset in pixels
    topOffsetSmPx: -40,
    topOffsetMdPx: -48,
    // Left branch offsets
    offsetLeft: 52, // horizontal offset in pixels for left branches
    offsetLeftSm: 68,
    offsetLeftMd: 103,
    // Right branch offsets
    offsetRight: 12, // horizontal offset in pixels for right branches
    offsetRightSm: 20,
    offsetRightMd: 31,
  },
};

export default function LumberjackGame() {
  
  const [segments, setSegments] = useState<Segment[]>(() => generateStack(15));
  const [playerSide, setPlayerSide] = useState<"left" | "right">("left");
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [flyingChunks, setFlyingChunks] = useState<any[]>([]);
  const [flyingBranches, setFlyingBranches] = useState<any[]>([]); // separate state for flying branches
  const [bullState, setBullState] = useState<"standing" | "leftChop" | "rightChop">("standing");
  const [animationFrame, setAnimationFrame] = useState(0); // trigger re-render for animations
  const [patternOffset, setPatternOffset] = useState(0); // vertical offset of trunk pattern (moves down as chopped)
  const [timeRemaining, setTimeRemaining] = useState(50); // starts at 50% (0-100 scale)
  // responsive branch offsets in px (computed from config + window width)
  const [branchOffsetLeftPx, setBranchOffsetLeftPx] = useState<number>(RESPONSIVE_CONFIG.branch.offsetLeft);
  const [branchOffsetRightPx, setBranchOffsetRightPx] = useState<number>(RESPONSIVE_CONFIG.branch.offsetRight);
  const [branchTopOffsetPx, setBranchTopOffsetPx] = useState<number>(RESPONSIVE_CONFIG.branch.topOffsetPx);
  const bullRef = useRef<HTMLDivElement | null>(null);
  const playfieldRef = useRef<HTMLDivElement | null>(null);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isChoppingRef = useRef<boolean>(false); // prevent double chop execution
  const telegram = useTelegram();

  // update branch offsets on resize to pick offsetLeft/offsetLeftSm/offsetLeftMd and offsetRight/offsetRightSm/offsetRightMd
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      // Tailwind defaults: sm = 640, md = 768
      if (w >= 768) {
        setBranchOffsetLeftPx(RESPONSIVE_CONFIG.branch.offsetLeftMd ?? RESPONSIVE_CONFIG.branch.offsetLeft);
        setBranchOffsetRightPx(RESPONSIVE_CONFIG.branch.offsetRightMd ?? RESPONSIVE_CONFIG.branch.offsetRight);
        setBranchTopOffsetPx(RESPONSIVE_CONFIG.branch.topOffsetMdPx ?? RESPONSIVE_CONFIG.branch.topOffsetPx);
      } else if (w >= 640) {
        setBranchOffsetLeftPx(RESPONSIVE_CONFIG.branch.offsetLeftSm ?? RESPONSIVE_CONFIG.branch.offsetLeft);
        setBranchOffsetRightPx(RESPONSIVE_CONFIG.branch.offsetRightSm ?? RESPONSIVE_CONFIG.branch.offsetRight);
        setBranchTopOffsetPx(RESPONSIVE_CONFIG.branch.topOffsetSmPx ?? RESPONSIVE_CONFIG.branch.topOffsetPx);
      } else {
        setBranchOffsetLeftPx(RESPONSIVE_CONFIG.branch.offsetLeft ?? 0);
        setBranchOffsetRightPx(RESPONSIVE_CONFIG.branch.offsetRight ?? 0);
        setBranchTopOffsetPx(RESPONSIVE_CONFIG.branch.topOffsetPx ?? 0);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Fetch top 100 leaderboard once on mount
  useEffect(() => {
    (async function fetchTop() {
      try {
        const resp = await fetch(`/api/lumberjack/leaderboard?limit=100`);
        if (!resp.ok) {
          console.warn('Failed to fetch top 100 leaderboard', await resp.text());
          return;
        }
        const json = await resp.json();
        console.log('Top 100 leaderboard (lumberjack):', json.leaderboard);
      } catch (e) {
        console.warn('Error fetching leaderboard', e);
      }
    })();
  }, []);

  // Fetch leaderboard window for Telegram user when available
  useEffect(() => {
    if (!telegram.user) return;
    (async function fetchWindowForUser() {
      try {
        const uid = telegram.user?.id ? String(telegram.user.id) : undefined;
        if (!uid) return;
        const resp = await fetch(`/api/lumberjack/leaderboard-window?user_id=${encodeURIComponent(uid)}&top=5&before=5&after=5`);
        if (!resp.ok) {
          console.warn('Failed to fetch leaderboard window', await resp.text());
          return;
        }
        const json = await resp.json();
        console.log('Leaderboard window for user', uid, json);
      } catch (e) {
        console.warn('Error fetching leaderboard window', e);
      }
    })();
  }, [telegram.user]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isRunning && (e.key === "ArrowLeft" || e.key === "ArrowRight")) start();
      if (!isRunning) return;
      if (e.key === "ArrowLeft") handleChop("left");
      if (e.key === "ArrowRight") handleChop("right");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isRunning]);

  useEffect(() => {
    // clean up flying chunks and branches after animation
    const t = setInterval(() => {
      setFlyingChunks((c) => c.filter((x) => Date.now() - x.t < 500));
      setFlyingBranches((b) => b.filter((x) => Date.now() - x.t < 350)); // faster cleanup for branches
    }, 100);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    // Animation loop for smooth flying chunks and branches
    let rafId: number;
    const animate = () => {
      setAnimationFrame((f) => f + 1);
      rafId = requestAnimationFrame(animate);
    };
    if (flyingChunks.length > 0 || flyingBranches.length > 0) {
      rafId = requestAnimationFrame(animate);
    }
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [flyingChunks.length, flyingBranches.length]);

  useEffect(() => {
    // Reset bull to standing after chop animation
    if (bullState === "leftChop" || bullState === "rightChop") {
      const timer = setTimeout(() => {
        setBullState("standing");
      }, 200); // show chop state for 200ms then return to standing
      return () => clearTimeout(timer);
    }
  }, [bullState]);

  useEffect(() => {
    // Timer countdown effect with progressive difficulty
    if (isRunning && !isGameOver) {
      timerIntervalRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          // Progressive drain rate based on score: starts at 0.5%/50ms, increases with score
          // At score 0: 0.5%/50ms (10 seconds to drain 100%)
          // At score 50: 0.75%/50ms (6.7 seconds)
          // At score 100: 1.0%/50ms (5 seconds)
          // At score 200: 1.5%/50ms (3.3 seconds)
          const baseDrainRate = 0.5;
          const drainRate = baseDrainRate + (score * 0.005); // increases by 0.005% per point
          const newTime = prev - drainRate;
          
          if (newTime <= 0) {
            setIsGameOver(true);
            setIsRunning(false);
            return 0;
          }
          return newTime;
        });
      }, 50); // update every 50ms for smooth animation
      
      return () => {
        if (timerIntervalRef.current) {
          clearInterval(timerIntervalRef.current);
        }
      };
    }
  }, [isRunning, isGameOver, score]);

  function start() {
    setSegments(generateStack(15));
    setPlayerSide("left");
    setScore(0);
    setIsRunning(true);
    setIsGameOver(false);
    setFlyingChunks([]);
    setFlyingBranches([]);
    setBullState("standing");
    setPatternOffset(0); // reset pattern position
    setTimeRemaining(50); // start at 50%
  }

  function generateStack(n: number) {
    const arr: Segment[] = [];
    for (let i = 0; i < n; i++) {
      // First chunk should always be a trunk for safe start
      if (i === 0) {
        arr.push("trunk");
        continue;
      }
      
      const prev = arr[i - 1];
      
      // Count same-side branches in last 8 segments (including trunks in between)
      const lookbackWindow = Math.min(8, i);
      let leftCount = 0;
      let rightCount = 0;
      let consecutiveTrunks = 0;
      
      for (let j = i - 1; j >= Math.max(0, i - lookbackWindow); j--) {
        if (arr[j] === "branch-left") leftCount++;
        if (arr[j] === "branch-right") rightCount++;
      }
      
      // Count consecutive trunks immediately before this position
      for (let j = i - 1; j >= 0; j--) {
        if (arr[j] === "trunk") {
          consecutiveTrunks++;
        } else {
          break;
        }
      }
      
      // Force opposite branch if one side has 4+ branches in the window
      if (leftCount >= 4 || rightCount >= 4) {
        const forcedBranch: Segment = leftCount >= 4 ? "branch-right" : "branch-left";
        // Must place trunk between opposite branches
        if (
          (prev === "branch-left" && forcedBranch === "branch-right") ||
          (prev === "branch-right" && forcedBranch === "branch-left")
        ) {
          arr.push("trunk");
        } else {
          arr.push(forcedBranch);
        }
        continue;
      }
      
      // Prevent long stretches of consecutive trunks (max 3)
      if (consecutiveTrunks >= 3) {
        const newBranch: Segment = Math.random() > 0.5 ? "branch-left" : "branch-right";
        arr.push(newBranch);
        continue;
      }
      
      const place = Math.random();
      
      // Higher branch probability (60%) to make them more common obstacles
      if (place < 0.6) {
        // Try to place a branch
        const newBranch: Segment = Math.random() > 0.5 ? "branch-left" : "branch-right";
        
        // Check if previous was an opposite branch
        if (
          (prev === "branch-left" && newBranch === "branch-right") ||
          (prev === "branch-right" && newBranch === "branch-left")
        ) {
          // Must place trunk between opposite branches
          arr.push("trunk");
        } else {
          // Safe to place branch (same side or no previous branch conflict)
          arr.push(newBranch);
        }
      } else {
        arr.push("trunk");
      }
    }
    return arr;
  }

  function handleChop(side: "left" | "right") {
    if (!isRunning || isGameOver) return;
    
    // Prevent double execution within 100ms
    if (isChoppingRef.current) return;
    isChoppingRef.current = true;
    setTimeout(() => {
      isChoppingRef.current = false;
    }, 100);
    
    setPlayerSide(side);

    // trigger bull chop state based on side
    setBullState(side === "left" ? "leftChop" : "rightChop");

    setSegments((prev) => {
      if (prev.length === 0) return prev;
      
      // Get the bottom segment (closest to player) - this is the FIRST visible segment
      const bottom = prev[0];
      // Get the next segment above it
      const nextAbove = prev.length > 1 ? prev[1] : null;
      
      // Check if the bottom segment has a branch on the side the player is chopping from
      if (bottom === (`branch-${side}` as Segment)) {
        // Game over: player hit a branch on their side
        pushFlyingChunk(bottom, side);
        setIsGameOver(true);
        setIsRunning(false);
        return prev;
      }

      // Check if the next segment above has a branch on the player's side
      // After removing current segment, that branch will fall on the player
      if (nextAbove === (`branch-${side}` as Segment)) {
        // Game over: the branch above will fall on the player after this chop
        pushFlyingChunk(bottom, side);
        setIsGameOver(true);
        setIsRunning(false);
        return prev;
      }

      // normal chop: remove bottom (first element) and animate it
      const newArr = prev.slice(1);
      pushFlyingChunk(bottom, side);
      setScore((s) => {
        const newScore = s + 1;
        // Progressive time bonus: starts at 10%, decreases as score increases
        // Score 0-20: 10% bonus
        // Score 21-50: 8% bonus
        // Score 51-100: 6% bonus
        // Score 101-150: 4% bonus
        // Score 151+: 2% bonus
        let timeBonus = 10;
        if (newScore > 150) timeBonus = 2;
        else if (newScore > 100) timeBonus = 4;
        else if (newScore > 50) timeBonus = 6;
        else if (newScore > 20) timeBonus = 8;
        
        setTimeRemaining((t) => Math.min(t + timeBonus, 100));
        return newScore;
      });
      
  // Move pattern down by one segment height (logical, not visual pattern height)
  setPatternOffset((offset) => offset + RESPONSIVE_CONFIG.segment.heightPx / 2);

      // append new segments at end to maintain height
      if (newArr.length < 12) {
        // Use the same generation logic to maintain consistency
        const prevBottom = newArr[newArr.length - 1];
        const place = Math.random();
        let add: Segment = "trunk";
        
        // Count same-side branches in last 8 segments (including trunks in between)
        const lookbackWindow = Math.min(8, newArr.length);
        let leftCount = 0;
        let rightCount = 0;
        let consecutiveTrunks = 0;
        
        for (let j = newArr.length - 1; j >= Math.max(0, newArr.length - lookbackWindow); j--) {
          if (newArr[j] === "branch-left") leftCount++;
          if (newArr[j] === "branch-right") rightCount++;
        }
        
        // Count consecutive trunks from the end
        for (let j = newArr.length - 1; j >= 0; j--) {
          if (newArr[j] === "trunk") {
            consecutiveTrunks++;
          } else {
            break;
          }
        }
        
        // Force opposite branch if one side has 4+ branches in the window
        if (leftCount >= 4 || rightCount >= 4) {
          const forcedBranch: Segment = leftCount >= 4 ? "branch-right" : "branch-left";
          // Must place trunk between opposite branches
          if (
            (prevBottom === "branch-left" && forcedBranch === "branch-right") ||
            (prevBottom === "branch-right" && forcedBranch === "branch-left")
          ) {
            add = "trunk";
          } else {
            add = forcedBranch;
          }
        } else if (consecutiveTrunks >= 3) {
          // Prevent long stretches of consecutive trunks (max 3)
          const newBranch: Segment = Math.random() > 0.5 ? "branch-left" : "branch-right";
          add = newBranch;
        } else if (place < 0.6) {
          // Higher branch probability (60%) to make them more common obstacles
          const newBranch: Segment = Math.random() > 0.5 ? "branch-left" : "branch-right";
          // Check if bottom segment is opposite branch
          if (
            (prevBottom === "branch-left" && newBranch === "branch-right") ||
            (prevBottom === "branch-right" && newBranch === "branch-left")
          ) {
            add = "trunk"; // Must place trunk between opposite branches
          } else {
            add = newBranch;
          }
        }
        
        newArr.push(add);
      }

      return newArr;
    });
  }

  function pushFlyingChunk(seg: Segment, side: "left" | "right") {
    const id = Math.random().toString(36).slice(2);
    const startTime = Date.now();
    
    // If it's a branch, add to flyingBranches instead of flyingChunks
    if (seg === "branch-left" || seg === "branch-right") {
      const isLeft = seg === "branch-left";
      const offsetX = isLeft ? (branchOffsetLeftPx || 0) : (branchOffsetRightPx || 0);
      const offsetY = branchTopOffsetPx || 0;
      
      setFlyingBranches((b) => [...b, { 
        id, 
        seg, 
        side, 
        t: startTime,
        isLeft, // which side the branch is on (left or right)
        offsetX,
        offsetY,
      }]);
    } else {
      // Regular trunk chunk
      setFlyingChunks((c) => [...c, { id, seg, side, t: startTime }]);
    }
  }

  function handlePlayfieldClick(e: React.MouseEvent<HTMLDivElement>) {
    if (!playfieldRef.current) return;
    const rect = playfieldRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const centerX = rect.width / 2;
    // If the game isn't running (including after game over), start/restart the game
    if (!isRunning) {
      start();
      return;
    }

    if (clickX < centerX) {
      handleChop("left");
    } else {
      handleChop("right");
    }
  }

  // Only render visible segments (first maxVisible from bottom up)
  const visibleSegments = segments.slice(0, RESPONSIVE_CONFIG.segment.maxVisible);

  // small helpers for classes
  const bullAlignClass = playerSide === "left" ? `justify-start ${RESPONSIVE_CONFIG.bull.padding}` : `justify-end ${RESPONSIVE_CONFIG.bull.paddingRight}`;

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      {/* Header: use SwapHeader component to match exact styling */}
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-6">
        <div>
          <LumberjackHeader title="Lumberjack" onSlippageClick={() => { /* no-op or wire settings */ }} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 pb-12">
        <div>
          {/* Playfield */}
          <div
            ref={playfieldRef}
            onClick={handlePlayfieldClick}
            className="relative w-full rounded-xl overflow-hidden cursor-pointer shadow-lg border border-white/5 bg-transparent h-[48vh] max-h-[520px]"
          >
          {/* In-play overlays */}
          {/* Timer progress bar and Score */}
          {(isRunning || isGameOver) && (
            <div className="absolute left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center gap-3" style={{ top: "10%" }}>
              {/* Timer Progress Bar with rounded background */}
              <div className="bg-[#1A1A1A] rounded-full px-4 py-3">
                <div className={`${RESPONSIVE_CONFIG.ui.timerBar} h-3 rounded-full border-2 overflow-hidden bg-[#1A1A1A]`} style={{ borderColor: '#00FFE5' }}>
                  <div 
                    className="h-full transition-all duration-100 ease-linear rounded-full"
                    style={{ 
                      width: `${timeRemaining}%`,
                      backgroundColor: '#00FFE580'
                    }}
                  />
                </div>
              </div>
              {/* Score */}
              <div className={`${RESPONSIVE_CONFIG.ui.score} font-clash font-bold text-white drop-shadow-lg`}>{score}</div>
            </div>
          )}

          {/* Centered Play icon (replaces Start button) */}
          {!isRunning && !isGameOver && (
            <div className="absolute inset-0 z-[9999] flex items-center justify-center pointer-events-none">
                <img
                  src="/images/tree/play-circle.svg"
                  alt="Start game"
                  onClick={(e) => {
                    e.stopPropagation();
                    start();
                  }}
                  className={`${RESPONSIVE_CONFIG.ui.playButton} cursor-pointer pointer-events-auto transform transition-all duration-150 active:opacity-70 active:scale-95`}
                  style={{ transform: "translateY(8px)" }}
                />
            </div>
          )}
          {/* Tree Area (render over the island) */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className={`relative flex items-center justify-center ${RESPONSIVE_CONFIG.trunk.width} h-4/5`}>
              {/* Static trunk background extending beyond viewport */}
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none ${RESPONSIVE_CONFIG.trunk.width} h-[150%]`}>
                <img
                  src={IMAGE_PATHS.trunkBackground}
                  alt="trunk background"
                  className="w-full h-full object-cover object-bottom"
                  draggable={false}
                />
              </div>

              {/* Clipping container for pattern - extends to top */}
              <div 
                className={`absolute left-1/2 transform -translate-x-1/2 pointer-events-none overflow-hidden ${RESPONSIVE_CONFIG.trunk.width} h-[150%] bottom-0`}
              >
                {/* Scrolling trunk pattern overlay */}
                <div 
                  className="absolute bottom-0 left-0 right-0 flex flex-col items-center"
                  style={{ 
                    transform: `translateY(${patternOffset % RESPONSIVE_CONFIG.pattern.heightPx}px)`
                  }}
                >
                  {/* Render enough pattern instances to cover viewport + offset */}
                  {Array.from({ length: Math.ceil((RESPONSIVE_CONFIG.segment.maxVisible * RESPONSIVE_CONFIG.segment.heightPx + patternOffset) / RESPONSIVE_CONFIG.pattern.heightPx) + 3 }).map((_, i) => (
                    <img
                      key={i}
                      src={IMAGE_PATHS.trunkPattern}
                      alt="trunk pattern"
                      className="w-full block"
                      style={{ height: `${RESPONSIVE_CONFIG.pattern.heightPx}px` }}
                      draggable={false}
                    />
                  ))}
                </div>
              </div>

              {/* Branches positioned on segments */}
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col-reverse items-center pointer-events-none ${RESPONSIVE_CONFIG.trunk.width} h-full`}>
                {visibleSegments.map((seg, idx) => {
                  // Calculate branch offset from bottom, staying fixed relative to pattern
                  const segmentBottomOffset = idx * RESPONSIVE_CONFIG.segment.heightPx + (patternOffset % RESPONSIVE_CONFIG.segment.heightPx);
                  return (
                    <div
                      key={idx}
                      className={`absolute flex items-center justify-center ${RESPONSIVE_CONFIG.trunk.width} ${RESPONSIVE_CONFIG.segment.height}`}
                      style={{
                        bottom: `${segmentBottomOffset}px`,
                      }}
                    >
                      {/* Branch overlays - position from left/right edges with proper flip and independent offsets */}
                      {(seg === "branch-left" || seg === "branch-right") && (() => {
                        const isLeft = seg === "branch-left";
                        const imgClass = `absolute h-full w-auto object-contain ${RESPONSIVE_CONFIG.branch.scale} pointer-events-none select-none`;
                        // Use separate offsets for left and right branches
                        const offsetX = isLeft ? (branchOffsetLeftPx || 0) : (branchOffsetRightPx || 0);
                        const offsetY = branchTopOffsetPx || 0;

                        // Left branches: position from right edge (right: 50%), flip horizontally
                        // Right branches: position from left edge (left: 50%), no flip
                        const imgStyle: React.CSSProperties = isLeft
                          ? {
                              right: `50%`,
                              top: `${offsetY}px`,
                              transform: `scaleX(-1) translateX(${offsetX}px)`,
                              transformOrigin: 'right center',
                            }
                          : {
                              left: `50%`,
                              top: `${offsetY}px`,
                              transform: `translateX(${offsetX}px)`,
                              transformOrigin: 'left center',
                            };

                        return (
                          <img
                            src={IMAGE_PATHS.branch}
                            alt={isLeft ? "branch left" : "branch right"}
                            className={imgClass}
                            style={imgStyle}
                            draggable={false}
                          />
                        );
                      })()}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Game Over overlay (click to restart) */}
          {isGameOver && (
            <div
              className="absolute inset-0 z-50 flex items-center justify-center"
              // clicking overlay restarts the game (same as arrow keys)
              onClick={(e) => {
                // prevent the playfield handler from also running
                e.stopPropagation();
                start();
              }}
            >
              <div className="bg-black/60 backdrop-blur-sm rounded-lg px-6 py-4 text-center pointer-events-auto">
                <div className="text-2xl font-clash font-semibold">Game Over</div>
                <div className="text-sm text-white/80 mt-1">Tap anywhere to restart</div>
              </div>
            </div>
          )}

          {/* Background trees behind island */}
            <div className={`absolute ${RESPONSIVE_CONFIG.decoration.positions.bgLeft} pointer-events-none z-5`}>
            <img
              src="/images/tree/background-tree.svg"
              alt="Background tree left"
              className={`${RESPONSIVE_CONFIG.decoration.backgroundTree} h-auto opacity-100 transform scale-x-[-1]`}
              draggable={false}
            />
          </div>
          <div className={`absolute ${RESPONSIVE_CONFIG.decoration.positions.bgRight} pointer-events-none z-5`}>
            <img 
              src="/images/tree/background-tree.svg" 
              alt="Background tree right" 
              className={`${RESPONSIVE_CONFIG.decoration.backgroundTree} h-auto opacity-100`} 
              draggable={false} 
            />
          </div>

          {/* Island platform under the bull */}
          <div className={`absolute ${RESPONSIVE_CONFIG.decoration.positions.island} flex justify-center pointer-events-none z-10`}>
            <img 
              src="/images/tree/island.svg" 
              alt="Platform" 
              className={RESPONSIVE_CONFIG.decoration.island} 
              draggable={false} 
            />
          </div>

          {/* Small bush at the base of the tree (centered above the island) */}
          <div className={`absolute ${RESPONSIVE_CONFIG.decoration.positions.bush} flex justify-center pointer-events-none`} style={{ zIndex: 50 }}>
            <img
              src="/images/tree/bush.svg"
              alt="Bush"
              className={`${RESPONSIVE_CONFIG.decoration.bush} h-auto select-none`}
              draggable={false}
            />
          </div>

          {/* Bull Character */}
          <div className={`absolute ${RESPONSIVE_CONFIG.bull.bottom} left-0 right-0 flex justify-center pointer-events-none z-40`}>
            <div
              ref={bullRef}
              className={`${RESPONSIVE_CONFIG.bull.container} flex items-center ${bullAlignClass}`}
            >
              <img
                src={(() => {
                  // Determine which sprite to show based on state and side
                  if (bullState === "leftChop") return BULL_SPRITES.leftChop;
                  if (bullState === "rightChop") return BULL_SPRITES.rightChop;
                  if (bullState === "standing") {
                    if (isGameOver) {
                      // Game over sprites
                      return playerSide === "left" ? BULL_SPRITES.gameOverLeft : BULL_SPRITES.gameOverRight;
                    }
                    // Standing sprites based on side
                    return playerSide === "left" ? BULL_SPRITES.standingLeft : BULL_SPRITES.standingRight;
                  }
                  return BULL_SPRITES.standingLeft;
                })()}
                alt="bull"
                className={`${RESPONSIVE_CONFIG.bull.sprite} object-contain select-none`}
                draggable={false}
              />
            </div>
          </div>

          {/* Flying chunks */}
      {flyingChunks.map((c) => {
            const elapsed = Date.now() - c.t;
            const progress = Math.min(elapsed / 400, 1); // 0 to 1 over 500ms
            const easeOut = 1 - Math.pow(1 - progress, 3); // cubic ease-out

            // Calculate position and rotation based on eased progress
            const distance = easeOut * 180;
            const rotation = easeOut * 40; // full rotation
            // Fade out fully within the lifetime (500ms)
            const opacity = Math.max(0, 1 - progress);

            // keep chunks visually centered then apply flight offset
            const flight =
              c.side === "left"
                ? `translate(${distance}px, ${-distance * 0.3}px) rotate(${rotation}deg)`
                : `translate(${-distance}px, ${-distance * 0.3}px) rotate(${-rotation}deg)`;

            // Start from bottom segment position (same as branches)
            const startingBottom = patternOffset % RESPONSIVE_CONFIG.segment.heightPx + 50;

            return (
              <div
                key={c.id}
                className={`absolute pointer-events-none z-30 ${RESPONSIVE_CONFIG.trunk.width} ${RESPONSIVE_CONFIG.segment.height}`}
                style={{
                  bottom: `${startingBottom}px`,
                  left: "50%",
                  transform: `translateX(-50%) ${flight}`,
                  opacity,
                }}
              >
                <img
                  src={IMAGE_PATHS.flyingChunk}
                  alt="flying chunk"
                  className="w-full h-full object-contain select-none"
                  draggable={false}
                />
              </div>
            );
          })}

          {/* Flying branches - animate from their actual position on the tree */}
          {flyingBranches.map((b) => {
            const elapsed = Date.now() - b.t;
            const progress = Math.min(elapsed / 600, 1); // 0 to 1 over 600ms (slower movement)
            const easeOut = 1 - Math.pow(1 - progress, 3); // cubic ease-out

            // Calculate position and rotation based on eased progress
            const distance = easeOut * 150; // reduced distance for slower movement
            const rotation = easeOut * 60; // rotation for branches
            
            // Fade out quicker - start fading at 40% progress, fully transparent at 100%
            const fadeStart = 0.4;
            const fadeProgress = Math.max(0, (progress - fadeStart) / (1 - fadeStart));
            const opacity = Math.max(0, 1 - fadeProgress);

            // Left branches fly LEFT, right branches fly RIGHT
            // For left branches: negative X to fly left, for right branches: positive X to fly right
            const flightTransform = b.isLeft
              ? `translate(${distance}px, ${-distance * 0.4}px) rotate(${rotation}deg)`
              : `translate(${distance}px, ${-distance * 0.4}px) rotate(${rotation}deg)`;

            // Start from bottom segment position (where it was chopped)
            const startingBottom = patternOffset % RESPONSIVE_CONFIG.segment.heightPx;

            return (
              <div
                key={b.id}
                className={`absolute flex items-center justify-center pointer-events-none z-30 ${RESPONSIVE_CONFIG.trunk.width} ${RESPONSIVE_CONFIG.segment.height}`}
                style={{
                  bottom: `${startingBottom}px`,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <img
                  src={IMAGE_PATHS.branch}
                  alt="flying branch"
                  className={`absolute h-full w-auto object-contain ${RESPONSIVE_CONFIG.branch.scale} pointer-events-none select-none`}
                  style={{
                    ...(b.isLeft
                      ? {
                          right: `50%`,
                          top: `${b.offsetY}px`,
                          transform: `scaleX(-1) translateX(${b.offsetX}px) ${flightTransform}`,
                          transformOrigin: 'right center',
                        }
                      : {
                          left: `50%`,
                          top: `${b.offsetY}px`,
                          transform: `translateX(${b.offsetX}px) ${flightTransform}`,
                          transformOrigin: 'left center',
                        }),
                    opacity,
                  }}
                  draggable={false}
                />
              </div>
            );
          })}

          {/* Tap zones indicator removed (L/R) */}
          </div>

          {/* Button Controls (SVG image buttons) */}
          <div className="mt-4">
            <div className={`flex items-center justify-center ${RESPONSIVE_CONFIG.ui.chopButtonGap}`}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleChop("left");
                  }}
                  aria-label="Chop left"
                  className="rounded-full bg-transparent group transition-all duration-150 active:scale-90"
                >
                  <span className={`inline-flex items-center justify-center rounded-full ${RESPONSIVE_CONFIG.ui.chopButton} transition-all duration-150 group-active:bg-[#00ffe5]/20`}> 
                    <img 
                      src="/images/tree/left-circle.svg" 
                      alt="Chop left" 
                      className="w-full h-full" 
                      draggable={false} 
                    />
                  </span>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleChop("right");
                  }}
                  aria-label="Chop right"
                  className="rounded-full bg-transparent group transition-all duration-150 active:scale-90"
                >
                  <span className={`inline-flex items-center justify-center rounded-full ${RESPONSIVE_CONFIG.ui.chopButton} transition-all duration-150 group-active:bg-[#00ffe5]/20`}> 
                    <img 
                      src="/images/tree/right-circle.svg" 
                      alt="Chop right" 
                      className="w-full h-full" 
                      draggable={false} 
                    />
                  </span>
                </button>
            </div>
          </div>

          {/* Instructions */}
          {/* <div className="mt-4 text-center text-muted-foreground text-sm">
            <p>Tap left or right side of the play area to chop!</p>
            <p>Avoid branches on your side or it&apos;s game over.</p>
          </div> */}
        </div>
      </div>
    </main>
  );
}
