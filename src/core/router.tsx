import { createHashRouter } from "react-router-dom";

import { Error } from "../components/error";
import { About } from "../pages/About.tsx";
import { HomePage } from "../pages/HomePage.tsx";
import { Map } from "../pages/Map.tsx";
import { Root, rootLoader } from "../pages/Root.tsx";
import { TopicBotPage } from "../pages/TopicBotPage.tsx";
import { TopicPage, topicPageLoader } from "../pages/TopicPage.tsx";

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
          element: <Map />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/topic/:topicID",
          element: <TopicPage />,
          errorElement: <Error />,
          loader: topicPageLoader,
        },
        {
          path: "/topic/:topicID/bot/critic",
          element: <TopicBotPage bot="critic" />,
          errorElement: <Error />,
          loader: topicPageLoader,
        },
        {
          path: "/topic/:topicID/bot/potential",
          element: <TopicBotPage bot="potential" />,
          errorElement: <Error />,
          loader: topicPageLoader,
        },
      ],
    },
  ]);
}
