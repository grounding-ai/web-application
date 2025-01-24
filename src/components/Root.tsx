import { FC, useMemo } from "react";
import { RouterProvider } from "react-router-dom";

import { getRouter } from "../core/router.tsx";

const Root: FC = () => {
  const router = useMemo(() => getRouter(), []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Root;
