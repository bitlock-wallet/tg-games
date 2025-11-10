import React from "react";
import { RESPONSIVE_CONFIG } from "../config";

export function DecorativeElements() {
  return (
    <>
      {/* Background trees */}
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

      {/* Island platform */}
      <div className={`absolute ${RESPONSIVE_CONFIG.decoration.positions.island} flex justify-center pointer-events-none z-10`}>
        <img 
          src="/images/tree/island.svg" 
          alt="Platform" 
          className={RESPONSIVE_CONFIG.decoration.island} 
          draggable={false} 
        />
      </div>

      {/* Promo table to the right of the island */}
      <div className={`absolute ${RESPONSIVE_CONFIG.decoration.positions.promo} pointer-events-none z-15`}>
        <img
          src="/images/tree/promo-table.svg"
          alt="Promo table"
          className={`${RESPONSIVE_CONFIG.decoration.promoTable} h-auto select-none`}
          draggable={false}
        />
      </div>

      {/* Bush */}
      <div className={`absolute ${RESPONSIVE_CONFIG.decoration.positions.bush} flex justify-center pointer-events-none`} style={{ zIndex: 50 }}>
        <img
          src="/images/tree/bush.svg"
          alt="Bush"
          className={`${RESPONSIVE_CONFIG.decoration.bush} h-auto select-none`}
          draggable={false}
        />
      </div>
    </>
  );
}
