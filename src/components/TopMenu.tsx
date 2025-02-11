import cx from "classnames";
import { FC, PropsWithChildren, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";

import { useAppContext } from "../core/context.ts";
import { translate } from "../utils/translation.ts";
import LanguageSelect from "./LanguageSelect.tsx";

export const TopMenu: FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  const { language } = useAppContext();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <section className={cx("p-3 d-flex flex-row align-items-baseline", className)}>
      <div className="flex-grow-1 position-relative">
        {children}
        {isMenuOpen && (
          <div className="bg-secondary position-absolute inset-0">
            <LanguageSelect
              className="w-auto me-1 d-inline-block align-baseline"
              selectClassName="border-white text-white"
            />
            <a
              href="#/about"
              className="btn btn-outline-light d-inline-block align-baseline font-monospace text-uppercase me-1"
            >
              {translate(
                {
                  en: "About",
                  da: "Om",
                },
                language,
              )}
            </a>
            <a href="#/" className="btn btn-outline-light d-inline-block align-baseline font-monospace text-uppercase">
              <AiOutlineHome />
            </a>
          </div>
        )}
      </div>
      <button className="btn text-white py-0 px-1" onClick={() => setMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </section>
  );
};
