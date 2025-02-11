import cx from "classnames";
import { FC, useMemo } from "react";

import { height, width } from "../map-dimensions.json";

type Point = {
  x: number;
  y: number;
  size?: number;
  color?: string;
};

const DEFAULTS = {
  size: 5,
  color: "#cccccc",
};

function simplifyFraction(numerator: number, denominator: number) {
  let a = numerator;
  let b = denominator;
  let c;
  while (b) {
    c = a % b;
    a = b;
    b = c;
  }
  return [numerator / a, denominator / a];
}

export const MapThumbnail: FC<{ points?: Point[]; className?: string }> = ({ points, className }) => {
  const aspectRatio = useMemo(() => {
    const [w, h] = simplifyFraction(width, height);
    return `${w} / ${h}`;
  }, []);

  return (
    <div className={cx("position-relative", className)}>
      <img src="/map.jpg" alt="The map with all topics" className="w-100" style={{ aspectRatio }} />
      <svg className="points position-absolute inset-0 w-100 h-100">
        {points?.map((point) => {
          const { x, y, size, color } = { ...DEFAULTS, ...point };
          return <circle cx={(x / width) * 100 + "%"} cy={(y / height) * 100 + "%"} r={size / 2} fill={color} />;
        })}
      </svg>
    </div>
  );
};
