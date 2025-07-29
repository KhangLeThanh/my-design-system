import React from "react";
import "./chip.css";

export interface ChipProps {
  text: string;
  icon?: React.ReactElement;
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Chip = ({ text, icon, onClick }: ChipProps) => {
  return (
    <span className="chip">
      <span className="chip-text">{text}</span>
      {icon && (
        <span
          className="chip-icon"
          onClick={onClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onClick?.();
            }
          }}
        >
          {icon}
        </span>
      )}
    </span>
  );
};
