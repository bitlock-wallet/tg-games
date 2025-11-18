import React from "react";
import { PlayerSide, BullState, BULL_SPRITES } from "../types";
import { RESPONSIVE_CONFIG } from "../config";

interface BullCharacterProps {
  bullRef: React.RefObject<HTMLDivElement | null>;
  playerSide: PlayerSide;
  bullState: BullState;
  isGameOver: boolean;
}

export function BullCharacter({ bullRef, playerSide, bullState, isGameOver }: BullCharacterProps) {
  const bullAlignClass = playerSide === "left" 
    ? `justify-start ${RESPONSIVE_CONFIG.bull.padding}` 
    : `justify-end ${RESPONSIVE_CONFIG.bull.paddingRight}`;

  const getBullSprite = () => {
    if (bullState === "leftChop") return BULL_SPRITES.leftChop;
    if (bullState === "rightChop") return BULL_SPRITES.rightChop;
    if (bullState === "standing") {
      if (isGameOver) {
        return playerSide === "left" ? BULL_SPRITES.gameOverLeft : BULL_SPRITES.gameOverRight;
      }
      return playerSide === "left" ? BULL_SPRITES.standingLeft : BULL_SPRITES.standingRight;
    }
    return BULL_SPRITES.standingLeft;
  };

  return (
    <div className={`absolute ${RESPONSIVE_CONFIG.bull.bottom} left-0 right-0 flex justify-center pointer-events-none z-40`}>
      <div
        ref={bullRef}
        className={`${RESPONSIVE_CONFIG.bull.container} flex items-center ${bullAlignClass}`}
      >
        <img
          src={getBullSprite()}
          alt="bull"
          className={`${RESPONSIVE_CONFIG.bull.sprite} object-contain select-none`}
          draggable={false}
        />
      </div>
    </div>
  );
}
