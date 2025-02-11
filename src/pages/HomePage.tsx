import { FC } from "react";

import LanguageSelect from "../components/LanguageSelect";
import { useAppContext } from "../core/context";
import { translate } from "../utils/translation";

export const HomePage: FC = () => {
  const { language } = useAppContext();

  return (
    <main className="p-3 pt-5 d-flex flex-column justify-content-between">
      <section>
        <LanguageSelect className="text-primary w-auto" selectClassName="border-primary" />
        <h1 className="display-1 mt-5">Grounding AI</h1>
        <p className="display-6 fw-normal">
          {translate(
            {
              en: "Exploring algorithms’ roles in science literature.",
              da: "Udforskning af algoritmers roller i videnskabelig litteratur.",
            },
            language,
          )}
        </p>
      </section>

      <section className="d-flex flex-column">
        <a href="#/map" className="btn btn-lg btn-outline-dark mb-2">
          {translate(
            {
              en: "Explore the digital AI Map",
              da: "Udforsk det digitale AI-kort",
            },
            language,
          )}
        </a>
        <a href="#/about" className="btn btn-lg btn-outline-dark mb-4">
          {translate(
            {
              en: "Read about the project",
              da: "Læs om projektet",
            },
            language,
          )}
        </a>
      </section>

      <section>
        <p className="fw-bold mb-0">
          {translate(
            {
              en: "Designed and Developed by:",
              da: "Designet og udviklet af:",
            },
            language,
          )}
        </p>
        <p className="mb-0">Echo lab (DTU), TANTLAB (AAU)</p>
        <p className="mb-0">OuestWare</p>
      </section>
    </main>
  );
};
