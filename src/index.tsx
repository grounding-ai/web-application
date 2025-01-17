import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Root from "./components/Root.tsx";
import "./styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
