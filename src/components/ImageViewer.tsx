import { Options, Viewer } from "openseadragon";
import { FC, useEffect, useRef } from "react";

const ImageViewer: FC<{ id?: string; tileSources: Options["tileSources"] }> = ({
  id = "seadragon-viewer",
  tileSources,
}) => {
  const viewerRef = useRef<Viewer | null>(null);

  useEffect(() => {
    viewerRef.current = new Viewer({
      id,
      tileSources,
      animationTime: 0.5,
    });

    return () => {
      viewerRef.current?.destroy();
    };
  }, []);

  return <div id={id} className="image-viewer" />;
};

export default ImageViewer;
