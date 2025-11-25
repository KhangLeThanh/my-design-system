import React from "react";
import "./slider.css";

export interface SliderProps {
  title: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
  value: number;
}

/** Primary UI component for user interaction */
const Slider: React.FC<SliderProps> = ({
  title,
  disabled = false,
  onChange,
  min,
  max,
  value,
  ...props
}) => {
  const id = `slider-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="slider-wrapper">
      <label htmlFor={id} className="slider-title">
        {title}: {value}
      </label>

      <input
        id={id}
        type="range"
        role="slider"
        className={`slider-input ${disabled ? "disabled-slider" : ""}`}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        disabled={disabled}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label={title}
        {...props}
      />
    </div>
  );
};

export default Slider;
