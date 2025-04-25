import cx from "classnames";
import { keyBy } from "lodash";
import { FC, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { makeLoader, useLoaderData } from "react-router-typesafe";

import { TopMenu } from "../components/TopMenu.tsx";
import { MethodologyDA, MethodologyEN } from "../components/aboutContents/Methodology.tsx";
import { ProjectDA, ProjectEN } from "../components/aboutContents/Project.tsx";
import { ReadTheMapDA, ReadTheMapEN } from "../components/aboutContents/ReadTheMap.tsx";
import { TeamDA, TeamEN } from "../components/aboutContents/Team.tsx";
import { TrustTheMapDA, TrustTheMapEN } from "../components/aboutContents/TrustTheMap.tsx";
import { useAppContext } from "../core/context.ts";
import { translate } from "../utils/translation.ts";

const CONTENTS = [
  {
    id: "project",
    bgColor: undefined,
    textColor: "primary",
    title: { en: "About the project", da: "Om projektet" },
    component: { en: ProjectEN, da: ProjectDA },
  },
  {
    id: "methodology",
    bgColor: "secondary",
    textColor: "light",
    title: { en: "Methodology", da: "Metode" },
    component: { en: MethodologyEN, da: MethodologyDA },
  },
  {
    id: "read-the-map",
    bgColor: undefined,
    textColor: "primary",
    title: { en: "How to read the map", da: "Hvordan læser man kortet" },
    component: { en: ReadTheMapEN, da: ReadTheMapDA },
  },
  {
    id: "trust-the-map",
    bgColor: "secondary",
    textColor: "light",
    title: { en: "Can you trust this map?", da: "Stoler du på kortet?" },
    component: { en: TrustTheMapEN, da: TrustTheMapDA },
  },
  {
    id: "team",
    bgColor: undefined,
    textColor: "primary",
    title: { en: "Who we are", da: "Hvem vi er" },
    component: { en: TeamEN, da: TeamDA },
  },
] as const;
const CONTENTS_DICT = keyBy(CONTENTS, "id");

// eslint-disable-next-line react-refresh/only-export-components
export const aboutPageLoader = makeLoader(async ({ params: { contentID } }) => {
  if (!contentID) throw new Error("Required content ID is missing from URL");

  return { content: CONTENTS_DICT[contentID] };
});

export const AboutPage: FC = () => {
  const { language } = useAppContext();
  const { content } = useLoaderData<typeof aboutPageLoader>();
  const navigate = useNavigate();
  const Component = translate(content.component, language);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [content.id]);

  return (
    <div
      className={cx(
        "about",
        content.bgColor && `bg-${content.bgColor}`,
        content.textColor && `text-${content.textColor}`,
      )}
    >
      <header>
        <TopMenu colorClassNameSuffix={content.textColor}>
          <h1 className="fs-5 mt-1">Grounding AI</h1>
        </TopMenu>
      </header>

      <aside>
        <div className="select-wrapper">
          <select
            className={cx(
              "form-select form-select-sm z-1 position-relative",
              `border-${content.textColor} text-${content.textColor}`,
            )}
            value={content.id}
            onChange={(e) => navigate(`/about/${e.target.value}`)}
          >
            {CONTENTS.map(({ id, title }) => (
              <option key={id} value={id}>
                {translate(title, language).toUpperCase()}
              </option>
            ))}
          </select>

          <div className="position-absolute h-100 top-0 end-0 pe-2 d-flex align-items-center justify-content-center">
            <FaAngleDown />
          </div>
        </div>

        <ul className="list-wrapper list-unstyled">
          {CONTENTS.map(({ id, title }) => (
            <li key={id} className={cx(id === content.id && "active")}>
              {id === content.id ? (
                <strong className="active">{translate(title, language).toUpperCase()}</strong>
              ) : (
                <Link to={`/about/${id}`}>{translate(title, language).toUpperCase()}</Link>
              )}
            </li>
          ))}
        </ul>
      </aside>

      <main>
        <Component />
      </main>
    </div>
  );
};
