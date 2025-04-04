import { NotificationProvider } from "@ouestware/notifications";
import { FC, useMemo } from "react";
import { RouterProvider } from "react-router-dom";

import { getRouter } from "./core/router";

export const App: FC = () => {
  const router = useMemo(() => getRouter(), []);

  return (
    <NotificationProvider>
      <RouterProvider router={router} />
    </NotificationProvider>
  );
};
