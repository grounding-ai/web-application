import { FC } from "react";
import { Link } from "react-router-dom";

import LanguageSelect from "../components/LanguageSelect";
import { useAppContext } from "../core/context";
import { translate } from "../utils/translation";

export const HomePage: FC = () => {
  const { language } = useAppContext();

  return (
    <div className="homepage">
      <header>
        <LanguageSelect className="text-primary w-auto" selectClassName="border-primary" />
      </header>

      <main>
        <section className="title">
          <h1 className="display-1">Grounding AI</h1>
          <p className="display-6 fw-normal">
            {translate(
              {
                en: "Exploring the role of algorithms in science",
                da: "Udforskning af algoritmers rolle inden for videnskaben",
              },
              language,
            )}
          </p>
        </section>

        <section className="links">
          <Link to="/map" className="btn btn-lg btn-outline-dark mb-4 d-block">
            {translate(
              {
                en: "Explore the map",
                da: "Udforsk kortet",
              },
              language,
            )}
          </Link>
          <Link to="/about/project" className="btn btn-lg btn-outline-dark d-block">
            {translate(
              {
                en: "Read about the project",
                da: "Læs om projektet",
              },
              language,
            )}
          </Link>
        </section>

        <section className="credits">
          <p className="fw-bold mb-0">
            {translate(
              {
                en: "Designed and Developed by:",
                da: "Designet og udviklet af:",
              },
              language,
            )}
          </p>
          <p className="mb-0">
            <a href="https://www.linkedin.com/company/echodtu">Echo lab (DTU)</a>,{" "}
            <a href="https://www.en.culture.aau.dk/research/research-groups/tantlab">TANTLAB (AAU)</a>
          </p>
          <p className="mb-0">
            <a href="https://www.ouestware.com/en/">OuestWare</a>
          </p>
        </section>
      </main>
    </div>
  );
};
