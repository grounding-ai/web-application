import { FC } from "react";

import { TopMenu } from "../components/TopMenu.tsx";

export const About: FC = () => {
  return (
    <main className="d-flex flex-column">
      <TopMenu colorClassNameSuffix="primary">
        <h1 className="fs-5 mt-1">Grounding AI</h1>
      </TopMenu>

      <div className="d-flex align-items-center justify-content-center flex-grow-1">
        <h1 className="display-2 text-center">
          TODO <div className="small">(write that about page)</div>
        </h1>
      </div>
    </main>
  );
};
