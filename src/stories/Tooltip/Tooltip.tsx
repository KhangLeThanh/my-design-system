import React from "react";
import { TextPosition } from "../enum";
import "./tooltip.css";

export interface Tooltiprops {
  title: string;
  content: string;
  positon?:
    | TextPosition.TOP
    | TextPosition.BOTTOM
    | TextPosition.RIGHT
    | TextPosition.LEFT;
  id?: string;
}

/** Primary UI component for user interaction */
const Tooltip: React.FC<Tooltiprops> = ({
  title,
  content,
  id,
  positon = TextPosition.BOTTOM,
}) => {
  const tooltipId = id || `tooltip-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="tooltip" aria-describedby={tooltipId} tabIndex={0}>
      {title}
      <span className={`tooltiptext ${positon}`} id={tooltipId}>
        {content}
      </span>
    </div>
  );
};

export default Tooltip;
