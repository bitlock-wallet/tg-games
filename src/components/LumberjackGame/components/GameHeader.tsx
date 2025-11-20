import React from "react";
import { RESPONSIVE_CONFIG } from "../config";

interface GameHeaderProps {
  isRunning: boolean;
  isGameOver: boolean;
  timeRemaining: number;
  score: number;
  visible?: boolean;
  levelNotification?: number | null;
}

export function GameHeader({ isRunning, isGameOver, timeRemaining, score, visible = true, levelNotification }: GameHeaderProps) {
  // Hide header when explicitly not visible or when the game isn't running and not over
  if (!visible || (!isRunning && !isGameOver)) return null;

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center gap-3" style={{ top: "10%" }}>
      {/* Timer Progress Bar */}
      <div className="bg-[#1A1A1A] rounded-full px-4 py-3">
        <div className={`${RESPONSIVE_CONFIG.ui.timerBar} h-3 rounded-full border-2 overflow-hidden bg-[#1A1A1A]`} style={{ borderColor: '#00FFE5' }}>
          <div 
            className="h-full transition-all duration-100 ease-linear rounded-full"
            style={{ 
              width: `${(timeRemaining / 7) * 100}%`,
              backgroundColor: '#00FFE580'
            }}
          />
        </div>
      </div>
      {/* Score with points logo */}
      <div className="flex items-center justify-center">
        <div className="text-3xl font-clash font-semibold text-white drop-shadow-lg mb-1 text-center truncate pr-0">
          {score}
        </div>
        <img src="/images/tree/points-logo.svg" alt="points" className="ml-3 w-10 h-10" />
      </div>
      
      {/* Level Notification */}
      {levelNotification !== null && (
        <div className="text-2xl sm:text-3xl md:text-4xl font-clash font-bold text-[#00FFE5] drop-shadow-lg animate-pulse">
          Level {levelNotification}
        </div>
      )}
    </div>
  );
}
