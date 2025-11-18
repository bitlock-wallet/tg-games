import React from "react";
import { PlayerSide } from "../types";
import { RESPONSIVE_CONFIG } from "../config";

interface ControlButtonsProps {
  isRunning: boolean;
  isGameOver: boolean;
  onChop: (side: PlayerSide) => void;
  // onStart can optionally request a new tree when called with `true` (replay)
  onStart: (forceNew?: boolean) => void;
}

export function ControlButtons({ isRunning, isGameOver, onChop, onStart }: ControlButtonsProps) {
  // Show play button before game starts
  if (!isRunning && !isGameOver) {
    return (
      <div className="mt-4">
        <div className="flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onStart();
            }}
            aria-label="Start game"
            className="rounded-full bg-transparent group transition-all duration-150 active:scale-90"
          >
            <img 
              src="/images/tree/bg-large.svg" 
              alt="Start game" 
              className={`${RESPONSIVE_CONFIG.ui.playButton} cursor-pointer`}
              draggable={false} 
            />
          </button>
        </div>
      </div>
    );
  }

  // Show replay button after game over
  if (isGameOver) {
    return (
      <div className="mt-4">
        <div className="flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Replay should generate a new stack
              onStart(true);
            }}
            aria-label="Replay game"
            className="rounded-full bg-transparent group transition-all duration-150 active:scale-90"
          >
            <img 
              src="/images/tree/refresh-circle.svg" 
              alt="Replay game" 
              className={`${RESPONSIVE_CONFIG.ui.playButton} cursor-pointer`}
              draggable={false} 
            />
          </button>
        </div>
      </div>
    );
  }

  // Show L/R buttons during gameplay
  return (
    <div className="mt-4">
      <div className={`flex items-center justify-center ${RESPONSIVE_CONFIG.ui.chopButtonGap}`}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onChop("left");
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
            onChop("right");
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
  );
}
