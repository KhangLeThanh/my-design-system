import React from "react";
import "./dropdown.css";

export interface DropdownProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant?: "primary" | "secondary";
  disabled?: boolean;
  idSelect: string;
  label?: string;
  values: { title: string; value: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({
  variant = "primary",
  idSelect = "select-item",
  values,
  disabled,
  label,
  ...props
}) => {
  return (
    <div className="dropdown-wrapper">
      {label && (
        <label htmlFor={idSelect} className="dropdown-label">
          {label}
        </label>
      )}
      <select
        id={idSelect}
        disabled={disabled}
        className={`input ${disabled ? "disabled-select" : "select"}`}
        aria-label={label ?? "Dropdown selection"}
        {...props}
      >
        {values.map((item) => (
          <option key={item.value} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
