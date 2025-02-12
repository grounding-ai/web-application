import { Options, Placement, Point as SeadragonPoint, Viewer, ZoomEvent } from "openseadragon";
import { FC, useEffect, useRef } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaRegCircleDot } from "react-icons/fa6";

import { Topic } from "../core/types.ts";
import { height, width } from "../map-dimensions.json";

const ZOOM_BUTTON_INCR = 1.4;
const MIN_EXPAND_ZOOM = 7;

export const ImageViewer: FC<{ id?: string; tileSources: Options["tileSources"]; points?: Topic[] }> = ({
  id = "seadragon-viewer",
  tileSources,
  points,
}) => {
  const viewerRef = useRef<Viewer | null>(null);

  useEffect(() => {
    const viewer = new Viewer({
      id,
      tileSources,
      animationTime: 0.5,
      homeFillsViewer: true,
      constrainDuringPan: true,
    });

    viewerRef.current = viewer;
    return () => {
      viewer.destroy();
      viewerRef.current = null;
    };
  }, [id, tileSources]);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer || !points?.length) return;

    const overlays = points.map((topic) => {
      const overlay = document.createElement("DIV");
      overlay.addEventListener(
        "click",
        (e) => {
          e.stopPropagation();
          viewer.destroy();
        },
        true,
      );
      overlay.innerHTML = `
        <a
          href="#/topic/${topic.id}"
          class="result font-monospace position-relative rounded rounded-1 d-flex flex-row d-inline-block w-auto h-auto"
        >
          <span class="result-number bg-primary text-white px-2 py-1 flex-shrink-0" style="white-space:pre-wrap">${(topic.index + "").padStart(4, " ")}</span>
          <span class="result-label bg-white text-primary flex-grow-1 px-2 py-1 text-truncate text-decoration-none">${topic.label}</span>
        </a>
      `;
      overlay.classList.add("overlay-result");
      if (viewer.viewport.getZoom(true) > MIN_EXPAND_ZOOM) overlay.classList.add("expand");
      viewer.addOverlay(overlay, new SeadragonPoint(topic.x / width, topic.y / height), Placement.LEFT);
      return overlay;
    });

    const handler = (event: ZoomEvent) => {
      const showFullLabels = event.zoom > MIN_EXPAND_ZOOM;
      overlays.forEach((overlay) => {
        if (showFullLabels) overlay.classList.add("expand");
        else overlay.classList.remove("expand");
      });
    };
    viewer.addHandler("zoom", handler);

    return () => {
      overlays.forEach((overlay) => viewer.removeOverlay(overlay));
      viewer.removeHandler("zoom", handler);
    };
  }, [points]);

  return (
    <div className="image-viewer">
      <div id={id} className="openseadragon-wrapper" />

      <div className="navigation p-3 d-flex flex-column">
        <button
          className="btn btn-primary border-white mb-1 small"
          onClick={() => viewerRef.current?.viewport.goHome()}
        >
          <FaRegCircleDot className="small" />
        </button>
        <button
          className="btn btn-primary border-white mb-1"
          onClick={() => viewerRef.current?.viewport.zoomBy(ZOOM_BUTTON_INCR)}
        >
          <AiOutlinePlus />
        </button>
        <button
          className="btn btn-primary border-white"
          onClick={() => viewerRef.current?.viewport.zoomBy(1 / ZOOM_BUTTON_INCR)}
        >
          <AiOutlineMinus />
        </button>
      </div>
    </div>
  );
};
