import { FC } from "react";
import { BsXOctagonFill } from "react-icons/bs";

export const Error500: FC<{ message?: string }> = ({ message }) => {
  return (
    <div className={"container text-center col-6 mt-5 pt-5"}>
      <div className="row">
        <h1>
          <BsXOctagonFill className="text-danger" />
        </h1>
        <h2 className="fw-bold">Error</h2>
        <p>{message || "Sorry, an unknown occurred"}</p>
      </div>
    </div>
  );
};
