import { Options, Viewer } from "openseadragon";
import { FC, useEffect, useRef } from "react";
import { FaHome } from "react-icons/fa";

const ImageViewer: FC<{ id?: string; tileSources: Options["tileSources"] }> = ({
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

      <div className="navigation p-3">
        <a href="#/" className="btn btn-outline-dark bg-white rounded-pill">
          <FaHome />
        </a>
      </div>
    </div>
  );
};

export default ImageViewer;
