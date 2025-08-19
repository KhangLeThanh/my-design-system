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
  disabled,
  onChange,
  min,
  max,
  value,
  ...props
}) => {
  const id = `slider-${title.toString().replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <>
      <label htmlFor={id} className={`slider ${disabled ? "disabled" : ""}`}>
        {title}: {value}{" "}
      </label>

      <input
        id={id}
        role="slider"
        onChange={onChange}
        disabled={disabled}
        min={min}
        max={max}
        value={value}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label={title}
        type="range"
        className={`input ${disabled ? "disabled-slider" : "slider"}`}
        {...props}
      />
    </>
  );
};

export default Slider;
