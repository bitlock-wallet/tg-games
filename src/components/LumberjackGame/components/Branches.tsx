import React from "react";
import { Segment } from "../types";
import { IMAGE_PATHS } from "../types";
import { RESPONSIVE_CONFIG } from "../config";

interface BranchesProps {
  visibleSegments: Segment[];
  patternOffset: number;
  branchOffsetLeftPx: number;
  branchOffsetRightPx: number;
  branchTopOffsetPx: number;
}

export function Branches({ visibleSegments, patternOffset, branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx }: BranchesProps) {
  return (
    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col-reverse items-center pointer-events-none ${RESPONSIVE_CONFIG.trunk.width} h-full`}>
      {visibleSegments.map((seg, idx) => {
        const segGap = RESPONSIVE_CONFIG.segment.gapPx || 0;
        const segmentTotal = RESPONSIVE_CONFIG.segment.heightPx + segGap;
        const segmentBottomOffset = idx * segmentTotal + (patternOffset % segmentTotal);
        return (
          <div
            key={idx}
            className={`absolute flex items-center justify-center ${RESPONSIVE_CONFIG.trunk.width} ${RESPONSIVE_CONFIG.segment.height}`}
            style={{
              bottom: `${segmentBottomOffset}px`,
            }}
          >
            {(seg === "branch-left" || seg === "branch-right") && (() => {
              const isLeft = seg === "branch-left";
              const imgClass = `absolute h-full w-auto object-contain ${RESPONSIVE_CONFIG.branch.scale} pointer-events-none select-none`;
              const offsetX = isLeft ? branchOffsetLeftPx : branchOffsetRightPx;
              const offsetY = branchTopOffsetPx;

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
  );
}
