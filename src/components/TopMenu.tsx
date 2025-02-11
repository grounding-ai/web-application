import cx from "classnames";
import { FC, PropsWithChildren, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import LanguageSelect from "./LanguageSelect.tsx";

export const TopMenu: FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <section className={cx("p-3 d-flex flex-row align-items-baseline", className)}>
      <div className="flex-grow-1 position-relative">
        {children}
        {isMenuOpen && (
          <div className="bg-secondary position-absolute inset-0">
            <LanguageSelect className="border-white text-white w-auto me-1 d-inline-block align-baseline" />
            <a
              href="#/about"
              className="btn btn-outline-light d-inline-block align-baseline font-monospace text-uppercase"
            >
              About
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
