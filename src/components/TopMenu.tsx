import cx from "classnames";
import { FC, PropsWithChildren, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useAppContext } from "../core/context.ts";
import { translate } from "../utils/translation.ts";
import LanguageSelect from "./LanguageSelect.tsx";

export const TopMenu: FC<PropsWithChildren<{ colorClassNameSuffix: string; current: "app" | "about" }>> = ({
  children,
  current,
  colorClassNameSuffix,
}) => {
  const { language } = useAppContext();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <section className={cx("top-menu", isMenuOpen && "expanded")}>
      <div className="menu-wrapper">
        <div className="menu-content">{children}</div>
        <div className="menu-options">
          <LanguageSelect
            className="w-auto me-2 d-inline-block align-baseline"
            selectClassName={`border-${colorClassNameSuffix} text-${colorClassNameSuffix}`}
          />
          <Link
            to={current === "app" ? "/about/project" : "/map"}
            className={`btn btn-sm btn-outline-${colorClassNameSuffix} d-inline-block align-baseline font-monospace text-uppercase me-2`}
          >
            {translate(
              current === "app"
                ? {
                    en: "About",
                    da: "Om",
                  }
                : {
                    en: "Map",
                    da: "Kortet",
                  },
              language,
            )}
          </Link>
          <a
            href="#/"
            className={`btn btn-sm btn-outline-${colorClassNameSuffix} d-inline-block align-baseline font-monospace text-uppercase`}
          >
            <AiOutlineHome />
          </a>
        </div>
      </div>
      <button
        className={`menu-toggle-btn p-4 mt-1 position-absolute end-0 top-0 border-0 bg-transparent text-${colorClassNameSuffix}`}
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </section>
  );
};
