import { Options, Viewer } from "openseadragon";
import { FC, useEffect, useRef } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ZOOM_BUTTON_INCR = 1.4;

export const ImageViewer: FC<{ id?: string; tileSources: Options["tileSources"] }> = ({
  id = "seadragon-viewer",
  tileSources,
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

  return (
    <div className="image-viewer">
      <div id={id} className="openseadragon-wrapper" />

      <div className="navigation p-3 d-flex flex-column">
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
