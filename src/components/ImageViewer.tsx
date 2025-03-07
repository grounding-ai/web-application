import cx from "classnames";
import { clamp, max } from "lodash";
import { Placement, Point, Point as SeadragonPoint, Viewer } from "openseadragon";
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaRegCircleDot } from "react-icons/fa6";

import { useAppContext } from "../core/context.ts";
import { Coordinates, Topic } from "../core/types.ts";
import { height, width } from "../map-dimensions.json";
import { getElements, getQuadTree } from "../utils/quadtree.ts";

const ZOOM_BUTTON_INCR = 1.4;
const MIN_EXPAND_ZOOM = 20;
const MIN_HIGHLIGHTS_ZOOM = 14;
const ID = "seadragon-viewer";
const TILE_SOURCES = `${import.meta.env.BASE_URL}/map/map.dzi`;

let lastViewportState: { x: number; y: number; zoom: number } | null = null;

export const ImageViewer: FC<{
  points?: Topic[];
  hidden?: boolean;
  focus?: Coordinates;
}> = ({ points, hidden, focus }) => {
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);
  const overlaysRef = useRef<Map<string, { dom: HTMLDivElement; topic: Topic }>>(new Map());
  const [viewer, setViewer] = useState<Viewer | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const { topics } = useAppContext();
  const maxLocalDensity = useMemo(() => max(topics.map((topic) => topic.localDensity)) || 1, [topics]);
  const quadTree = useMemo(() => getQuadTree(topics, 6), [topics]);
  const [highlightedTopics, setHighlightedTopics] = useState<Topic[] | null>(null);
  const pointsToDisplay = useMemo(() => points || highlightedTopics || [], [highlightedTopics, points]);

  const getTopicsOnScreen = useCallback(() => {
    if (!viewer) return [];
    const viewport = viewer.viewport;

    const viewportBoundaries = viewport.getBounds(true);
    const leftMargin = (200 / viewer.container.offsetWidth) * viewportBoundaries.width;
    const yMargin = (15 / viewer.container.offsetHeight) * viewportBoundaries.height;

    return getElements(
      [
        (viewportBoundaries.x - leftMargin) * width,
        (viewportBoundaries.y - yMargin) * height,
        (viewportBoundaries.x + viewportBoundaries.width + leftMargin) * width,
        (viewportBoundaries.y + viewportBoundaries.height + 2 * yMargin) * height,
      ],
      quadTree,
    );
  }, [quadTree, viewer]);

  // Handle Viewer lifecycle:
  useEffect(() => {
    const viewer = new Viewer({
      id: ID,
      tileSources: TILE_SOURCES,
      animationTime: 1,
      homeFillsViewer: true,
      constrainDuringPan: true,
    });
    const canvas = document.createElement("CANVAS") as HTMLCanvasElement;
    canvas.classList.add("topics-canvas");
    viewer.container.querySelector(".openseadragon-canvas")!.append(canvas);

    viewer.addHandler("open", () => {
      setIsFullyLoaded(true);
    });

    setViewer(viewer);
    ctxRef.current = canvas.getContext("2d");
    return () => {
      viewer.destroy();
      setViewer(null);
      ctxRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (isFullyLoaded && viewer) {
      if (lastViewportState) {
        viewer.viewport.panTo(new Point(lastViewportState.x, lastViewportState.y), true);
        viewer.viewport.zoomTo(lastViewportState.zoom, undefined, true);
      }
    }
  }, [isFullyLoaded, viewer]);

  // Handle topics rendering:
  useEffect(() => {
    if (!viewer || points) return;

    const getTopicSpecificZoom = (localDensity: number, zoom: number) => zoom - (localDensity / maxLocalDensity) * 80;
    viewer.addHandler("viewport-change", () => {
      const { viewport } = viewer;
      const zoom = viewport.getZoom(true);
      if (zoom > MIN_HIGHLIGHTS_ZOOM) {
        const topicsOnScreen = getTopicsOnScreen();
        setHighlightedTopics(
          topicsOnScreen.filter(({ localDensity }) => getTopicSpecificZoom(localDensity, zoom) > MIN_HIGHLIGHTS_ZOOM),
        );
      } else {
        setHighlightedTopics(null);
      }

      overlaysRef.current.forEach(({ dom, topic: { localDensity } }) => {
        if (getTopicSpecificZoom(localDensity, zoom) > MIN_EXPAND_ZOOM) dom.classList.add("expand");
        else dom.classList.remove("expand");
      });
    });
  }, [getTopicsOnScreen, isFullyLoaded, maxLocalDensity, points, viewer]);

  // Handle canvas rendering small points:
  useEffect(() => {
    if (!viewer || points) return;

    const handler = () => {
      const ctx = ctxRef.current;
      const { viewport } = viewer;
      if (!ctx) return;

      // Resize and clear canvas:
      const dpr = window.devicePixelRatio;
      const canvas = ctx.canvas;
      const canvasWidth = viewer.container.offsetWidth * dpr;
      const canvasHeight = viewer.container.offsetHeight * dpr;
      canvas.setAttribute("width", canvasWidth + "px");
      canvas.setAttribute("height", canvasHeight + "px");
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      const zoom = viewport.getZoom(true);
      ctx.globalAlpha = clamp((zoom - 5) / 5, 0, 1);

      const topics = getTopicsOnScreen();
      const topicSize = Math.min(zoom, 20) * 0.6;
      for (let i = 0; i < topics.length; i++) {
        const { x, y } = topics[i];
        // First convert image coordinates to viewport coordinates
        const viewportPoint = viewport.imageToViewportCoordinates(x, y);
        const screenPoint = viewer.viewport.viewportToViewerElementCoordinates(viewportPoint);
        ctx.fillStyle = "#313a44";
        ctx.fillRect(screenPoint.x - topicSize / 2, screenPoint.y - topicSize / 2, topicSize, topicSize);
      }
    };

    viewer.addHandler("viewport-change", handler);
    return () => {
      viewer.removeHandler("viewport-change", handler);
    };
  }, [getTopicsOnScreen, points, quadTree, isFullyLoaded, viewer]);

  // Handle state management:
  useEffect(() => {
    if (!viewer) return;

    const handler = () => {
      const { viewport } = viewer;

      const center = viewport.getCenter(true);
      lastViewportState = {
        x: center.x,
        y: center.y,
        zoom: viewport.getZoom(true),
      };
    };

    viewer.addHandler("viewport-change", handler);
    return () => {
      viewer.removeHandler("viewport-change", handler);
    };
  }, [viewer]);

  // Handle overlays/highlights lifecycle:
  useEffect(() => {
    if (!viewer) return;

    const overlaysCache = overlaysRef.current;

    // Handle current overlays:
    const currentOverlays = new Set<string>();
    pointsToDisplay.forEach((topic) => {
      currentOverlays.add(topic.id);
      if (overlaysCache.has(topic.id)) return;

      const dom = document.createElement("DIV") as HTMLDivElement;
      dom.addEventListener(
        "click",
        (e) => {
          e.stopPropagation();
          viewer.destroy();
        },
        true,
      );
      dom.innerHTML = `
        <a
          href="#/topic/${topic.id}"
          class="result font-monospace position-relative rounded rounded-1 d-flex flex-row d-inline-block w-auto h-auto"
        >
          <span class="result-number bg-primary text-white px-2 py-1 flex-shrink-0" style="white-space:pre-wrap">${(topic.index + "").padStart(4, " ")}</span>
          <span class="result-label bg-white text-primary flex-grow-1 px-2 py-1 text-truncate text-decoration-none">${topic.label}</span>
        </a>
      `;
      dom.classList.add("overlay-result");

      if (viewer.viewport.getZoom(true) > MIN_EXPAND_ZOOM) dom.classList.add("expand");
      viewer.addOverlay(dom, new SeadragonPoint(topic.x / width, topic.y / height), Placement.LEFT);
      overlaysCache.set(topic.id, { dom, topic });
    });

    // Remove out-of-bound overlays:
    overlaysCache.forEach(({ dom }, id) => {
      if (!currentOverlays.has(id)) {
        viewer.removeOverlay(dom);
        overlaysCache.delete(id);
      }
    });
  }, [pointsToDisplay, isFullyLoaded, viewer]);

  // Handle focus:
  useEffect(() => {
    if (!viewer) return;

    if (focus) {
      const rect = viewer.viewport.imageToViewportRectangle(focus.x, focus.y);
      viewer.viewport.fitBoundsWithConstraints(rect);
    }
  }, [focus, viewer]);

  return (
    <div className={cx("image-viewer", hidden && "visually-hidden")}>
      <div id={ID} className="openseadragon-wrapper" />

      <div className="navigation p-3 d-flex flex-column">
        <button className="btn btn-primary border-white mb-1 small" onClick={() => viewer?.viewport.goHome()}>
          <FaRegCircleDot />
        </button>
        <button className="btn btn-primary border-white mb-1" onClick={() => viewer?.viewport.zoomBy(ZOOM_BUTTON_INCR)}>
          <AiOutlinePlus />
        </button>
        <button className="btn btn-primary border-white" onClick={() => viewer?.viewport.zoomBy(1 / ZOOM_BUTTON_INCR)}>
          <AiOutlineMinus />
        </button>
      </div>
    </div>
  );
};
