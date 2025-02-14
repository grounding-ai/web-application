import { Coordinates } from "../core/types.ts";

export type BBox = [number, number, number, number];
export type Leaf<T> = {
  type: "leaf";
  elements: T[];
};
export type Quad<T> = {
  type: "quad";
  bbox: BBox;
  children: [QuadChild<T> | null, QuadChild<T> | null, QuadChild<T> | null, QuadChild<T> | null];
};
export type QuadChild<T> = Quad<T> | Leaf<T>;

// Helpers:
// ********
export function getBBox(points: Coordinates[]): BBox {
  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;

  points.forEach((point) => {
    minX = Math.min(point.x, minX);
    maxX = Math.max(point.x, maxX);
    minY = Math.min(point.y, minY);
    maxY = Math.max(point.y, maxY);
  });

  return [minX, minY, maxX, maxY];
}

export function getNewQuadChild<T>(box: BBox, isLeaf?: boolean): QuadChild<T> {
  return isLeaf
    ? {
        type: "leaf",
        elements: [],
      }
    : {
        type: "quad",
        bbox: box,
        children: [null, null, null, null],
      };
}

// Predicates:
// ***********
export function doBBoxesIntersect([mx1, my1, Mx1, My1]: BBox, [mx2, my2, Mx2, My2]: BBox): boolean {
  return !(mx1 > Mx2) && !(Mx1 < mx2) && !(my1 > My2) && !(My1 < my2);
}

export function isPointInBBox({ x, y }: Coordinates, [minX, minY, maxX, maxY]: BBox): boolean {
  return x >= minX && y >= minY && x <= maxX && y <= maxY;
}
