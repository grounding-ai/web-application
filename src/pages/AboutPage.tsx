import cx from "classnames";
import { keyBy } from "lodash";
import { FC, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { makeLoader, useLoaderData } from "react-router-typesafe";

import { TopMenu } from "../components/TopMenu.tsx";
import { Methodology } from "../components/aboutContents/Methodology.tsx";
import { Project } from "../components/aboutContents/Project.tsx";
import { ReadTheMap } from "../components/aboutContents/ReadTheMap.tsx";
import { Team } from "../components/aboutContents/Team.tsx";
import { TrustTheMap } from "../components/aboutContents/TrustTheMap.tsx";

const CONTENTS = [
  {
    id: "project",
    bgColor: undefined,
    textColor: "primary",
    title: "About the project",
    component: Project,
  },
  {
    id: "methodology",
    bgColor: "secondary",
    textColor: "light",
    title: "Methodology",
    component: Methodology,
  },
  {
    id: "read-the-map",
    bgColor: undefined,
    textColor: "primary",
    title: "How to read the map?",
    component: ReadTheMap,
  },
  {
    id: "trust-the-map",
    bgColor: "secondary",
    textColor: "light",
    title: "Can you trust this map?",
    component: TrustTheMap,
  },
  {
    id: "team",
    bgColor: undefined,
    textColor: "primary",
    title: "The team behind it",
    component: Team,
  },
] as const;
const CONTENTS_DICT = keyBy(CONTENTS, "id");

// eslint-disable-next-line react-refresh/only-export-components
export const aboutPageLoader = makeLoader(async ({ params: { contentID } }) => {
  if (!contentID) throw new Error("Required content ID is missing from URL");

  return { content: CONTENTS_DICT[contentID] };
});

export const AboutPage: FC = () => {
  const { content } = useLoaderData<typeof aboutPageLoader>();
  const navigate = useNavigate();

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
                {title.toUpperCase()}
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
                <strong className="active">{title.toUpperCase()}</strong>
              ) : (
                <Link to={`/about/${id}`}>{title.toUpperCase()}</Link>
              )}
            </li>
          ))}
        </ul>
      </aside>

      <main>
        <content.component />
      </main>
    </div>
  );
};
