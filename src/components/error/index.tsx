import { FC } from "react";
import { useRouteError } from "react-router-dom";

import { getErrorData } from "../../utils/error";
import { NotFound } from "./404";
import { Error500 } from "./500";

export const Error: FC = () => {
  const error = useRouteError();
  const data = getErrorData(error);

  if (data.code === 404) return <NotFound message={data.message} />;
  return <Error500 message={data.message} />;
};
