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
          path: "/map",
          element: <AppPage pageType="search" />,
        },
        {
          path: "/about/:contentID",
          element: <AboutPage />,
          errorElement: <Error />,
          loader: aboutPageLoader,
        },
        {
          path: "/topic/:topicID",
          element: <AppPage pageType="topic" />,
          errorElement: <Error />,
        },
        {
          path: "/topic/:topicID/bot/critic",
          element: <AppPage pageType="topic" bot="critic" />,
          errorElement: <Error />,
        },
        {
          path: "/topic/:topicID/bot/potential",
          element: <AppPage pageType="topic" bot="potential" />,
          errorElement: <Error />,
        },
      ],
    },
  ]);
}
