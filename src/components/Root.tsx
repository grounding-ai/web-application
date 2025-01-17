import { FC } from "react";

import ImageViewer from "./ImageViewer.tsx";

const Root: FC = () => {
  return (
    <>
      <ImageViewer tileSources={"/map/map.dzi"} />
    </>
  );
};

export default Root;
