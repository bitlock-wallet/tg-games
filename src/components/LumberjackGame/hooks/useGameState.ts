import { useEffect, useState, useRef } from "react";
import { Segment, PlayerSide, BullState, FlyingChunk, FlyingBranch } from "../types";
import { generateStack, generateNewSegment } from "../utils/treeGeneration";
import { RESPONSIVE_CONFIG } from "../config";

export function useGameState() {
  // Initialize with empty segments to avoid SSR/client hydration mismatch caused by random generation.
  const [segments, setSegments] = useState<Segment[]>([]);
  const [playerSide, setPlayerSide] = useState<PlayerSide>("left");
  const [score, setScore] = useState(0);
  const [multiplier, setMultiplier] = useState<number>(1);
  const [isRunning, setIsRunning] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [flyingChunks, setFlyingChunks] = useState<FlyingChunk[]>([]);
  const [flyingBranches, setFlyingBranches] = useState<FlyingBranch[]>([]);
  const [bullState, setBullState] = useState<BullState>("standing");
  const [animationFrame, setAnimationFrame] = useState(0);
  const [patternOffset, setPatternOffset] = useState(0);
  const [levelNotification, setLevelNotification] = useState<number | null>(null);
  
  const isChoppingRef = useRef<boolean>(false);
  const lastLevelRef = useRef<number>(0);

  // Start the game. If forceNew is true (used by Replay), always generate a new stack.
  const start = (forceNew = false) => {
    setSegments((prev) => (forceNew || !prev || prev.length === 0 ? generateStack(15) : prev));
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

  const pushFlyingChunk = (
    seg: Segment,
    side: PlayerSide,
    branchOffsetLeftPx: number,
    branchOffsetRightPx: number,
    branchTopOffsetPx: number
  ) => {
    const id = Math.random().toString(36).slice(2);
    const startTime = Date.now();
    
    if (seg === "branch-left" || seg === "branch-right") {
      const isLeft = seg === "branch-left";
      const offsetX = isLeft ? branchOffsetLeftPx : branchOffsetRightPx;
      const offsetY = branchTopOffsetPx;
      
      setFlyingBranches((b) => [...b, { 
        id, 
        seg, 
        side, 
        t: startTime,
        isLeft,
        offsetX,
        offsetY,
      }]);
    } else {
      setFlyingChunks((c) => [...c, { id, seg, side, t: startTime }]);
    }
  };

  const handleChop = (
    side: PlayerSide,
    branchOffsetLeftPx: number,
    branchOffsetRightPx: number,
    branchTopOffsetPx: number,
    setTimeRemaining: (fn: (prev: number) => number) => void
  ) => {
    if (!isRunning || isGameOver) return;
    
    if (isChoppingRef.current) return;
    isChoppingRef.current = true;
    setTimeout(() => {
      isChoppingRef.current = false;
    }, 100);
    
    setPlayerSide(side);
    setBullState(side === "left" ? "leftChop" : "rightChop");

    setSegments((prev) => {
      if (prev.length === 0) return prev;
      
      const bottom = prev[0];
      const nextAbove = prev.length > 1 ? prev[1] : null;
      
      if (bottom === (`branch-${side}` as Segment)) {
        pushFlyingChunk(bottom, side, branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx);
        setIsGameOver(true);
        setIsRunning(false);
        return prev;
      }

      if (nextAbove === (`branch-${side}` as Segment)) {
        pushFlyingChunk(bottom, side, branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx);
        setIsGameOver(true);
        setIsRunning(false);
        return prev;
      }

      const newArr = prev.slice(1);
      pushFlyingChunk(bottom, side, branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx);
      
      const segGap = RESPONSIVE_CONFIG.segment.gapPx || 0;
      const segmentTotal = RESPONSIVE_CONFIG.segment.heightPx + segGap;
      setPatternOffset((offset) => offset + segmentTotal);

      if (newArr.length < 12) {
        const add = generateNewSegment(newArr);
        newArr.push(add);
      }

      return newArr;
    });

    // Update score outside of setSegments to prevent double increment
    setScore((s) => {
      const add = typeof multiplier === 'number' && Number.isFinite(multiplier) ? multiplier : 1;
      const newScore = s + add;
      // Calculate level based on score (every 20 points = 1 level)
      const level = Math.floor(newScore / 20);
      
      // Check if level increased
      if (level > lastLevelRef.current) {
        lastLevelRef.current = level;
        setLevelNotification(level);
        setTimeout(() => setLevelNotification(null), 3000);
      }
      
      // Piecewise time bonus curve:
      const base = 0.42; // starting bonus at level 0
      const earlyDecay = 0.02; // per level decay for levels 0..7
      const lateDecay = 0.005; // per level decay after level 7 (very gentle)
      const earlyMaxLevel = 6;
      const earlyMin = 0.18; // don't let early ramp drop below this
      const globalMin = 0.15; // absolute floor for very late levels

      let timeBonus: number;
      if (level <= earlyMaxLevel) {
        timeBonus = Math.max(earlyMin, base - level * earlyDecay);
      } else {
        const earlyVal = Math.max(earlyMin, base - earlyMaxLevel * earlyDecay);
        const extraLevels = level - earlyMaxLevel;
        timeBonus = Math.max(globalMin, earlyVal - extraLevels * lateDecay);
      }

      setTimeRemaining((t) => Math.min(t + timeBonus, 7));
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
    handleChop,
    multiplier,
    setMultiplier,
  };
}
