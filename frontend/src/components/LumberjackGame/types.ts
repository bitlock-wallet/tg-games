export type Segment = "trunk" | "branch-left" | "branch-right";

export type BullState = "standing" | "leftChop" | "rightChop";

export type PlayerSide = "left" | "right";

export interface FlyingChunk {
  id: string;
  seg: Segment;
  side: PlayerSide;
  t: number;
}

export interface FlyingBranch extends FlyingChunk {
  isLeft: boolean;
  offsetX: number;
  offsetY: number;
}

export const IMAGE_PATHS = {
  trunkBackground: "/images/tree/trunk-background.svg",
  trunkPattern: "/images/tree/trunk-pattern.svg",
  branch: "/images/tree/branch_trunk.svg",
  flyingChunk: "/images/tree/tree_trunk.svg",
};

export const BULL_SPRITES = {
  standingLeft: "/images/tree/bull_sprite000.svg",
  standingRight: "/images/tree/bull_sprite005.svg",
  leftChop: "/images/tree/bull_sprite001.svg",
  rightChop: "/images/tree/bull_sprite002.svg",
  gameOverLeft: "/images/tree/bull_sprite003.svg",
  gameOverRight: "/images/tree/bull_sprite004.svg",
};
