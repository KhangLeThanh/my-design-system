import React from "react";
import "./button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`btn ${
        variant === "primary" ? "btn-primary" : "btn-secondary"
      } 
      ${disabled ? "disabled-btn" : "btn"}
      ${className}`}
      {...props}
    />
  );
};

export default Button;
