import React from "react";
import { PlayerSide, Segment } from "../types";
import { RESPONSIVE_CONFIG } from "../config";
import { TreeTrunk } from "./TreeTrunk";
import { Branches } from "./Branches";
import { BullCharacter } from "./BullCharacter";
import { FlyingObjects } from "./FlyingObjects";
import { GameOverlay } from "./GameOverlay";
import { DecorativeElements } from "./DecorativeElements";
import { GameHeader } from "./GameHeader";
import { Leaderboard } from "./Leaderboard";

interface PlayfieldProps {
  playfieldRef: React.RefObject<HTMLDivElement | null>;
  bullRef: React.RefObject<HTMLDivElement | null>;
  visibleSegments: Segment[];
  patternOffset: number;
  playerSide: PlayerSide;
  bullState: "standing" | "leftChop" | "rightChop";
  isGameOver: boolean;
  isRunning: boolean;
  flyingChunks: any[];
  flyingBranches: any[];
  branchOffsetLeftPx: number;
  branchOffsetRightPx: number;
  branchTopOffsetPx: number;
  timeRemaining: number;
  score: number;
  levelNotification?: number | null;
  onPlayfieldClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export function Playfield({
  playfieldRef,
  bullRef,
  visibleSegments,
  patternOffset,
  playerSide,
  bullState,
  isGameOver,
  isRunning,
  flyingChunks,
  flyingBranches,
  branchOffsetLeftPx,
  branchOffsetRightPx,
  branchTopOffsetPx,
  timeRemaining,
  score,
  levelNotification,
  onPlayfieldClick,
}: PlayfieldProps) {
  return (
    <div
      ref={playfieldRef}
      onClick={onPlayfieldClick}
      className="relative w-full rounded-xl overflow-hidden cursor-pointer shadow-lg border border-white/5 bg-transparent h-[48vh] max-h-[520px]"
    >
      {/* When leaderboard is visible (before start or after game over) hide header/overlay */}
      {(() => {
        const leaderboardVisible = !isRunning || isGameOver;
        return (
          <>
            <GameHeader isRunning={isRunning} isGameOver={isGameOver} timeRemaining={timeRemaining} score={score} visible={!leaderboardVisible} levelNotification={levelNotification} />
            <Leaderboard visible={leaderboardVisible} isGameOver={isGameOver} currentScore={score} />
            {!leaderboardVisible && <GameOverlay isGameOver={isGameOver} />}
          </>
        );
      })()}

      {/* Tree Area */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className={`relative flex items-center justify-center ${RESPONSIVE_CONFIG.trunk.width} h-4/5`}>
          <TreeTrunk patternOffset={patternOffset} />
          <Branches 
            visibleSegments={visibleSegments}
            patternOffset={patternOffset}
            branchOffsetLeftPx={branchOffsetLeftPx}
            branchOffsetRightPx={branchOffsetRightPx}
            branchTopOffsetPx={branchTopOffsetPx}
          />
        </div>
      </div>

      <DecorativeElements />

      <BullCharacter 
        bullRef={bullRef}
        playerSide={playerSide}
        bullState={bullState}
        isGameOver={isGameOver}
      />

      <FlyingObjects 
        flyingChunks={flyingChunks}
        flyingBranches={flyingBranches}
        patternOffset={patternOffset}
      />
    </div>
  );
}
