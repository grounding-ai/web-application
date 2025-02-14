import { Coordinates } from "../core/types.ts";
import {
  BBox,
  Quad,
  QuadChild,
  doBBoxesIntersect,
  getBBox,
  getNewQuadChild,
  isPointInBBox,
} from "./quadtree-helpers.ts";

export function getQuadTree<P extends Coordinates = Coordinates>(points: P[], depth: number): Quad<P> {
  const boundingBox = getBBox(points);
  const root = getNewQuadChild(boundingBox) as Quad<P>;

  for (let i = 0, l = points.length; i < l; i++) {
    const point = points[i];

    let quads: QuadChild<P>[] = [root];
    for (let d = 0; d < depth; d++) {
      if (!quads.length) break;

      const newQuads: QuadChild<P>[] = [];
      for (let j = 0, quadsCount = quads.length; j < quadsCount; j++) {
        const quad = quads[j];
        if (quad.type !== "quad") break;

        const [x1, y1, x2, y2] = quad.bbox;
        const ax = (x1 + x2) / 2;
        const ay = (y1 + y2) / 2;

        const candidates: BBox[] = [
          [x1, y1, ax, ay],
          [ax, y1, x2, ay],
          [x1, ay, ax, y2],
          [ax, ay, x2, y2],
        ];
        for (let k = 0; k < candidates.length; k++) {
          const candidate = candidates[k];
          if (isPointInBBox(point, candidate)) {
            quad.children[k] = quad.children[k] || getNewQuadChild(candidate, d === depth - 1);
            newQuads.push(quad.children[k] as QuadChild<P>);
          }
        }
      }

      quads = newQuads;
    }

    for (let j = 0, k = quads.length; j < k; j++) {
      const quad = quads[j];
      if (quad.type !== "leaf") break;

      quad.elements.push(point);
    }
  }

  return root;
}

export function getElements<T>(viewport: BBox, quadTree: Quad<T>): T[] {
  const elements: T[] = [];
  const quadsToCheck: QuadChild<T>[] = doBBoxesIntersect(viewport, quadTree.bbox) ? [quadTree] : [];

  for (let i = 0; i < quadsToCheck.length; i++) {
    const quad = quadsToCheck[i];

    if (quad.type === "leaf") {
      elements.push(...quad.elements);
    } else {
      for (let j = 0; j < quad.children.length; j++) {
        const child = quad.children[j];
        if (child && (child.type === "leaf" || doBBoxesIntersect(viewport, child.bbox))) {
          quadsToCheck.push(child);
        }
      }
    }
  }

  return elements;
}
