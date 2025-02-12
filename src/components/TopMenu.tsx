import cx from "classnames";
import { FC, PropsWithChildren, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";

import { useAppContext } from "../core/context.ts";
import { translate } from "../utils/translation.ts";
import LanguageSelect from "./LanguageSelect.tsx";

export const TopMenu: FC<PropsWithChildren<{ colorClassNameSuffix: string }>> = ({
  children,
  colorClassNameSuffix,
}) => {
  const { language } = useAppContext();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <section className="p-4 position-relative">
      <div className="flex-grow-1 position-relative">
        <div className={cx(isMenuOpen && "invisible")}>{children}</div>
        {isMenuOpen && (
          <div className="position-absolute inset-0">
            <LanguageSelect
              className="w-auto me-1 d-inline-block align-baseline"
              selectClassName={`border-${colorClassNameSuffix} text-${colorClassNameSuffix}`}
            />
            <a
              href="#/about"
              className={`btn btn-sm btn-outline-${colorClassNameSuffix} d-inline-block align-baseline font-monospace text-uppercase me-1`}
            >
              {translate(
                {
                  en: "About",
                  da: "Om",
                },
                language,
              )}
            </a>
            <a
              href="#/"
              className={`btn btn-sm btn-outline-${colorClassNameSuffix} d-inline-block align-baseline font-monospace text-uppercase`}
            >
              <AiOutlineHome />
            </a>
          </div>
        )}
      </div>
      <button
        className={`p-4 mt-1 position-absolute end-0 top-0 border-0 bg-transparent text-${colorClassNameSuffix}`}
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </section>
  );
};
