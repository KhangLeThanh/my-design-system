import React from "react";
import "./checkbox.css";

export interface CheckboxProps {
  title: string;
  values: string | number;
  disabled?: boolean;
}

/** Primary UI component for user interaction */
const Checkbox: React.FC<CheckboxProps> = ({
  title,
  values,
  disabled,
  ...props
}) => {
  const id = `checkbox-${values.toString().replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <>
      <label htmlFor={id} className="checkbox-label">
        <input
          name={values.toString()}
          id={id}
          value={values}
          disabled={disabled}
          type="checkbox"
          className={`input ${disabled ? "disabled-checkbox" : "checkbox"}`}
          {...props}
        />
        <span>{title}</span>
      </label>
    </>
  );
};

export default Checkbox;
