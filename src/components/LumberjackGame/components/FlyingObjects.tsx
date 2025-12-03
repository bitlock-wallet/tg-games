import React from "react";
import { FlyingChunk, FlyingBranch, IMAGE_PATHS } from "../types";
import { RESPONSIVE_CONFIG } from "../config";

interface FlyingObjectsProps {
  flyingChunks: FlyingChunk[];
  flyingBranches: FlyingBranch[];
  patternOffset: number;
}

export function FlyingObjects({ flyingChunks, flyingBranches, patternOffset }: FlyingObjectsProps) {
  const VISUAL_BRANCH_DROP_PX = 20;
  return (
    <>
      {/* Flying chunks */}
      {flyingChunks.map((c) => {
        const elapsed = Date.now() - c.t;
        const progress = Math.min(elapsed / 400, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);

        const distance = easeOut * 180;
        const rotation = easeOut * 40;
        const opacity = Math.max(0, 1 - progress);

        const flight =
          c.side === "left"
            ? `translate(${distance}px, ${-distance * 0.3}px) rotate(${rotation}deg)`
            : `translate(${-distance}px, ${-distance * 0.3}px) rotate(${-rotation}deg)`;

        const segGap = RESPONSIVE_CONFIG.segment.gapPx || 0;
        const segmentTotal = RESPONSIVE_CONFIG.segment.heightPx + segGap;
        const startingBottom = patternOffset % segmentTotal + 50;

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

      {/* Flying branches */}
      {flyingBranches.map((b) => {
        const elapsed = Date.now() - b.t;
        const progress = Math.min(elapsed / 600, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);

        const distance = easeOut * 150;
        const rotation = easeOut * 60;
        
        const fadeStart = 0.4;
        const fadeProgress = Math.max(0, (progress - fadeStart) / (1 - fadeStart));
        const opacity = Math.max(0, 1 - fadeProgress);

        const flightTransform = b.isLeft
          ? `translate(${distance}px, ${-distance * 0.4}px) rotate(${rotation}deg)`
          : `translate(${distance}px, ${-distance * 0.4}px) rotate(${rotation}deg)`;

        const segGap2 = RESPONSIVE_CONFIG.segment.gapPx || 0;
        const segmentTotal2 = RESPONSIVE_CONFIG.segment.heightPx + segGap2;
        const startingBottom = patternOffset % segmentTotal2;

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
    </>
  );
}
