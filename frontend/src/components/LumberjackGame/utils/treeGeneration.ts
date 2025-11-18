import { Segment } from "../types";

export function generateStack(n: number): Segment[] {
  // If running on the server during SSR, avoid randomness — render deterministic trunks only.
  // This prevents hydration mismatches if the generator is invoked during server rendering.
  if (typeof window === "undefined") {
    return new Array(n).fill("trunk") as Segment[];
  }

  const arr: Segment[] = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      arr.push("trunk");
      continue;
    }
    
    const prev = arr[i - 1];
    const lookbackWindow = Math.min(8, i);
    let leftCount = 0;
    let rightCount = 0;
    let consecutiveTrunks = 0;
    
    for (let j = i - 1; j >= Math.max(0, i - lookbackWindow); j--) {
      if (arr[j] === "branch-left") leftCount++;
      if (arr[j] === "branch-right") rightCount++;
    }
    
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] === "trunk") {
        consecutiveTrunks++;
      } else {
        break;
      }
    }
    
    if (leftCount >= 4 || rightCount >= 4) {
      const forcedBranch: Segment = leftCount >= 4 ? "branch-right" : "branch-left";
      // Check if opposite side also has 3+ branches to prevent oscillation
      const oppositeSideCount = leftCount >= 4 ? rightCount : leftCount;
      
      if (oppositeSideCount >= 3) {
        // Both sides have many branches, force trunk instead
        arr.push("trunk");
      } else if (
        (prev === "branch-left" && forcedBranch === "branch-right") ||
        (prev === "branch-right" && forcedBranch === "branch-left")
      ) {
        arr.push("trunk");
      } else {
        arr.push(forcedBranch);
      }
      continue;
    }
    
    if (consecutiveTrunks >= 3) {
      const newBranch: Segment = Math.random() > 0.5 ? "branch-left" : "branch-right";
      arr.push(newBranch);
      continue;
    }
    
    const place = Math.random();
    
    if (place < 0.6) {
      const newBranch: Segment = Math.random() > 0.5 ? "branch-left" : "branch-right";
      
      if (
        (prev === "branch-left" && newBranch === "branch-right") ||
        (prev === "branch-right" && newBranch === "branch-left")
      ) {
        arr.push("trunk");
      } else {
        arr.push(newBranch);
      }
    } else {
      arr.push("trunk");
    }
  }
  return arr;
}

export function generateNewSegment(currentSegments: Segment[]): Segment {
  const prevBottom = currentSegments[currentSegments.length - 1];
  const place = Math.random();
  let add: Segment = "trunk";
  
  const lookbackWindow = Math.min(8, currentSegments.length);
  let leftCount = 0;
  let rightCount = 0;
  let consecutiveTrunks = 0;
  
  for (let j = currentSegments.length - 1; j >= Math.max(0, currentSegments.length - lookbackWindow); j--) {
    if (currentSegments[j] === "branch-left") leftCount++;
    if (currentSegments[j] === "branch-right") rightCount++;
  }
  
  for (let j = currentSegments.length - 1; j >= 0; j--) {
    if (currentSegments[j] === "trunk") {
      consecutiveTrunks++;
    } else {
      break;
    }
  }
  
  if (leftCount >= 4 || rightCount >= 4) {
    const forcedBranch: Segment = leftCount >= 4 ? "branch-right" : "branch-left";
    // Check if opposite side also has 3+ branches to prevent oscillation
    const oppositeSideCount = leftCount >= 4 ? rightCount : leftCount;
    
    if (oppositeSideCount >= 3) {
      // Both sides have many branches, force trunk instead
      add = "trunk";
    } else if (
      (prevBottom === "branch-left" && forcedBranch === "branch-right") ||
      (prevBottom === "branch-right" && forcedBranch === "branch-left")
    ) {
      add = "trunk";
    } else {
      add = forcedBranch;
    }
  } else if (consecutiveTrunks >= 3) {
    const newBranch: Segment = Math.random() > 0.5 ? "branch-left" : "branch-right";
    add = newBranch;
  } else if (place < 0.6) {
    const newBranch: Segment = Math.random() > 0.5 ? "branch-left" : "branch-right";
    if (
      (prevBottom === "branch-left" && newBranch === "branch-right") ||
      (prevBottom === "branch-right" && newBranch === "branch-left")
    ) {
      add = "trunk";
    } else {
      add = newBranch;
    }
  }
  
  return add;
}
