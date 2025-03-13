import { createHashRouter } from "react-router-dom";

import { Error } from "../components/error";
import { AboutPage, aboutPageLoader } from "../pages/AboutPage.tsx";
import { AppPage } from "../pages/AppPage.tsx";
import { HomePage } from "../pages/HomePage.tsx";
import { Root, rootLoader } from "../pages/Root.tsx";

export function getRouter() {
  return createHashRouter([
    {
      path: "/",
      errorElement: <Error />,
      element: <Root />,
      loader: rootLoader,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about/:contentID",
          element: <AboutPage />,
          errorElement: <Error />,
          loader: aboutPageLoader,
        },
        {
          /**
           * To prevent remounting of the map on desktop, all pages that have the map must be in the single same path...
           * It's smelly, but I couldn't find a better way. Here are the paths that this "/*" represent (and check
           * AppPage to see how we read the wildcard):
           * - map
           * - topic/:topicID
           * - topic/:topicID/bot/critic
           * - topic/:topicID/bot/potential
           */
          path: "/*",
          element: <AppPage />,
          errorElement: <Error />,
        },
      ],
    },
  ]);
}
