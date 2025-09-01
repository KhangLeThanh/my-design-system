import React from "react";
import "./radio.css";

export interface RadioProps {
  title: string;
  value: string | number;
  disabled?: boolean;
  name: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/** Primary UI component for user interaction */
const Radio: React.FC<RadioProps> = ({
  title,
  value,
  name,
  disabled,
  checked = false,
  onChange,
  ...props
}) => {
  const id = `radio-${title.toString().replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <>
      <label htmlFor={id} className="radio-label">
        <input
          name={name}
          id={id}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          type="radio"
          className={`input ${disabled ? "disabled-radio" : "radio"}`}
          {...props}
        />
        <span>{title}</span>
      </label>
    </>
  );
};

export default Radio;
