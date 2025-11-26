import React from "react";
import { RESPONSIVE_CONFIG } from "../config";

interface GameHeaderProps {
  isRunning: boolean;
  isGameOver: boolean;
  timeRemaining: number;
  score: number;
  visible?: boolean;
  levelNotification?: number | null;
  multiplier?: number | string;
}

export function GameHeader({ isRunning, isGameOver, timeRemaining, score, visible = true, levelNotification, multiplier = 1 }: GameHeaderProps) {
  // Hide header when explicitly not visible or when the game isn't running and not over
  if (!visible || (!isRunning && !isGameOver)) return null;

  const multiplierLabel = typeof multiplier === 'number' ? `${multiplier}X` : String(multiplier);

  return (
    <div className="absolute left-0 right-0 z-50 h-32 md:h-36 lg:h-40" style={{ top: "10%" }}>
      <div className="relative w-full h-full flex items-center justify-center font-clash">
        <div className="absolute left-4 md:left-4 top-1/2 -translate-y-1/2 flex flex-col items-start text-left max-w-[220px]">
          <div className="font-clash font-semibold text-xl sm:text-2xl md:text-3xl text-primary mb-12">{multiplierLabel}</div>
        </div>

        {/* Centered Timer and Score wrapper */}
        <div className="flex flex-col items-center gap-3 w-max max-w-[90%] md:max-w-[600px] px-4">
          {/* Top row: on mobile show multiplier inline to the left of timer; on md+ the absolute one is used instead */}
          <div className="flex items-center justify-center w-full min-w-0">
            {/* Timer Progress Bar: allow shrinking on small widths and remain centered */}
            <div className="flex-1 min-w-0">
              <div className="bg-[#1A1A1A] rounded-full px-4 py-3 w-full">
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
      </div>
    </div>
  );
}
