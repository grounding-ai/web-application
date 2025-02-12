import cx from "classnames";
import { FC } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";

export const Toggle: FC<{
  id: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}> = ({ id, label, checked, disabled, onChange, className }) => {
  return (
    <label htmlFor={id} className={cx("d-flex flex-row align-items-center cursor", className)} role="button">
      <input
        id={id}
        type="checkbox"
        className="visually-hidden"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
      />
      {checked ? <FaToggleOn className="fs-1" /> : <FaToggleOff className="fs-1" />}
      {label && <span className="ms-2 small">{label}</span>}
    </label>
  );
};
