import cx from "classnames";
import { FC } from "react";
import { FaAngleDown } from "react-icons/fa6";

import { useAppContext } from "../core/context";
import { Language } from "../core/types";

type LanguageOption = { value: Language; label: string };
const OPTIONS: LanguageOption[] = [
  { value: "en", label: "English" },
  { value: "da", label: "Dansk" },
];

const LanguageSelect: FC<{ className?: string | null; selectClassName?: string | null }> = ({
  className,
  selectClassName,
}) => {
  const { language, setLanguage } = useAppContext();

  return (
    <div className={cx("position-relative d-inline-block", className)}>
      <select
        className={cx("form-select form-select-sm z-1 position-relative", selectClassName)}
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
      >
        {OPTIONS.map(({ value, label }) => (
          <option key={value} value={value} selected={value === language}>
            {label.toUpperCase()}
          </option>
        ))}
      </select>

      <div className="position-absolute h-100 top-0 end-0 pe-2 d-flex align-items-center justify-content-center">
        <FaAngleDown />
      </div>
    </div>
  );
};

export default LanguageSelect;
