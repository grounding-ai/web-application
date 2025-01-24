import { createHashRouter } from "react-router-dom";

import { FreeExploration } from "../components/FreeExploration.tsx";
import { HomePage } from "../components/HomePage.tsx";
import ImageViewer from "../components/ImageViewer.tsx";
import { Error } from "../components/error";

export function getRouter() {
  return createHashRouter([
    {
      path: "/",
      errorElement: <Error />,
      element: <HomePage />,
    },
    {
      path: "/explore",
      errorElement: <Error />,
      element: <FreeExploration />,
    },
    {
      path: "/map",
      errorElement: <Error />,
      element: <ImageViewer tileSources="/map/map.dzi" />,
    },
  ]);
}
