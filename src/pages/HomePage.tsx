import { FC } from "react";

import LanguageSelect from "../components/LanguageSelect.tsx";

export const HomePage: FC = () => {
  return (
    <main className="p-3 pt-5 d-flex flex-column justify-content-between">
      <section>
        <LanguageSelect className="text-primary w-auto" selectClassName="border-primary" />
        <h1 className="display-1 mt-5">Grounding AI</h1>
        <p className="display-6 fw-normal">Exploring algorithms’ roles in science literature.</p>
      </section>

      <section className="d-flex flex-column">
        <a href="#/map" className="btn btn-lg btn-outline-dark mb-2">
          Explore the digital AI Map
        </a>
        <a href="#/about" className="btn btn-lg btn-outline-dark mb-4">
          Read about the project
        </a>
      </section>

      <section>
        <p className="fw-bold mb-0">Designed and Developed by:</p>
        <p className="mb-0">Echo lab (DTU), TANTLAB (AAU)</p>
        <p className="mb-0">Ouestware</p>
      </section>
    </main>
  );
};
