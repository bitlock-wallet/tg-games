import { useState, useEffect } from "react";
import { RESPONSIVE_CONFIG } from "../config";

export function useResponsiveBranches() {
  const [branchOffsetLeftPx, setBranchOffsetLeftPx] = useState<number>(RESPONSIVE_CONFIG.branch.offsetLeft);
  const [branchOffsetRightPx, setBranchOffsetRightPx] = useState<number>(RESPONSIVE_CONFIG.branch.offsetRight);
  const [branchTopOffsetPx, setBranchTopOffsetPx] = useState<number>(RESPONSIVE_CONFIG.branch.topOffsetPx);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 768) {
        setBranchOffsetLeftPx(RESPONSIVE_CONFIG.branch.offsetLeftMd ?? RESPONSIVE_CONFIG.branch.offsetLeft);
        setBranchOffsetRightPx(RESPONSIVE_CONFIG.branch.offsetRightMd ?? RESPONSIVE_CONFIG.branch.offsetRight);
        setBranchTopOffsetPx(RESPONSIVE_CONFIG.branch.topOffsetMdPx ?? RESPONSIVE_CONFIG.branch.topOffsetPx);
      } else if (w >= 640) {
        setBranchOffsetLeftPx(RESPONSIVE_CONFIG.branch.offsetLeftSm ?? RESPONSIVE_CONFIG.branch.offsetLeft);
        setBranchOffsetRightPx(RESPONSIVE_CONFIG.branch.offsetRightSm ?? RESPONSIVE_CONFIG.branch.offsetRight);
        setBranchTopOffsetPx(RESPONSIVE_CONFIG.branch.topOffsetSmPx ?? RESPONSIVE_CONFIG.branch.topOffsetPx);
      } else {
        setBranchOffsetLeftPx(RESPONSIVE_CONFIG.branch.offsetLeft ?? 0);
        setBranchOffsetRightPx(RESPONSIVE_CONFIG.branch.offsetRight ?? 0);
        setBranchTopOffsetPx(RESPONSIVE_CONFIG.branch.topOffsetPx ?? 0);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return { branchOffsetLeftPx, branchOffsetRightPx, branchTopOffsetPx };
}
