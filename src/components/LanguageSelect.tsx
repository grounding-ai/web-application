import { FC } from "react";
import cx from "classnames";

import { useAppContext } from "../core/context";
import { Language } from "../core/types";

type LanguageOption = { value: Language; label: string };
const OPTIONS: LanguageOption[] = [
  { value: "en", label: "English" },
  { value: "da", label: "Dansk" },
];

const LanguageSelect: FC<{ className?: string | null }> = ({className}) => {
  const { language, setLanguage } = useAppContext();

  return (
    <select
      className={cx("form-select", className)}
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
    >
      {OPTIONS.map(({ value, label }) => (
        <option value={value} selected={value === language}>
          {label.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelect;
