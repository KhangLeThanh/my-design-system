import React from "react";
import "./switch.css";

export interface SwitchProps {
  title: string;
  disabled?: boolean;
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/** Primary UI component for user interaction */
const Switch: React.FC<SwitchProps> = ({
  title,
  disabled,
  checked = false,
  onChange,
  ...props
}) => {
  const id = `switch-${title.toString().replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <>
      <label htmlFor={id} className={`switch ${disabled ? "disabled" : ""}`}>
        <input
          id={id}
          role="switch"
          aria-checked={checked}
          onChange={onChange}
          checked={checked}
          disabled={disabled}
          type="checkbox"
          className={`input ${disabled ? "disabled-switch" : "switch"}`}
          {...props}
        />
        <span className="toggle"></span>

        <span className="switch-title">{title}</span>
      </label>
    </>
  );
};

export default Switch;
