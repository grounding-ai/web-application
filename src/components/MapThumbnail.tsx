import cx from "classnames";
import { FC, useMemo } from "react";

import { POINT_DEFAULTS, Topic } from "../core/types.ts";
import { height, width } from "../map-dimensions.json";

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

export const MapThumbnail: FC<{ points?: Topic[]; className?: string }> = ({ points, className }) => {
  const aspectRatio = useMemo(() => {
    const [w, h] = simplifyFraction(width, height);
    return `${w} / ${h}`;
  }, []);

  return (
    <div className={cx("position-relative", className)}>
      <img
        src={`${import.meta.env.BASE_URL}/map.jpg`}
        alt="The map with all topics"
        className="w-100"
        style={{ aspectRatio }}
      />
      <svg className="points position-absolute inset-0 w-100 h-100">
        {points?.map((point) => {
          const { id, x, y, size, color } = { ...POINT_DEFAULTS, ...point };
          return (
            <circle key={id} cx={(x / width) * 100 + "%"} cy={(y / height) * 100 + "%"} r={size / 2} fill={color} />
          );
        })}
      </svg>
    </div>
  );
};
