import React from "react";
import { IMAGE_PATHS } from "../types";
import { RESPONSIVE_CONFIG } from "../config";

interface TreeTrunkProps {
  patternOffset: number;
}

export function TreeTrunk({ patternOffset }: TreeTrunkProps) {
  return (
    <>
      {/* Static trunk background */}
      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none ${RESPONSIVE_CONFIG.trunk.width} h-[150%]`}>
        <img
          src={IMAGE_PATHS.trunkBackground}
          alt="trunk background"
          className="w-full h-full object-cover object-bottom"
          draggable={false}
        />
      </div>

      {/* Clipping container for pattern */}
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
              {(() => {
                const segGap = RESPONSIVE_CONFIG.segment.gapPx || 0;
                const segmentTotal = RESPONSIVE_CONFIG.segment.heightPx + segGap;
                const count = Math.ceil((RESPONSIVE_CONFIG.segment.maxVisible * segmentTotal + patternOffset) / RESPONSIVE_CONFIG.pattern.heightPx) + 3;
                return Array.from({ length: count }).map((_, i) => (
            <img
              key={i}
              src={IMAGE_PATHS.trunkPattern}
              alt="trunk pattern"
              className="w-full block"
              style={{ height: `${RESPONSIVE_CONFIG.pattern.heightPx}px`, marginBottom: `${RESPONSIVE_CONFIG.pattern.gapPx}px` }}
              draggable={false}
            />
                ));
              })()}
        </div>
      </div>
    </>
  );
}
