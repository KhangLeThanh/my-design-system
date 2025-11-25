import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./tabs.css";

export interface TabsProps {
  items: { label: string; urlLink?: string; content?: React.ReactNode }[];
  defaultIndex?: number;
}

export const Tabs = ({ items, defaultIndex = 0 }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div>
      <div role="tablist" aria-label="Tab navigation" className="tab-list">
        {items.map((item, index) =>
          item.urlLink ? (
            <Link
              key={item.label}
              to={item.urlLink}
              aria-label={`Go to ${item.label}`}
              role="tab"
              tabIndex={0}
              className="tab-link"
            >
              {item.label}
            </Link>
          ) : (
            <button
              key={item.label}
              id={`tab-${index}`}
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls={`tabpanel-${index}`}
              tabIndex={activeIndex === index ? 0 : -1}
              className={`tab-button ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {item.label}
            </button>
          )
        )}
      </div>
      {items.map(
        (item, index) =>
          !item.urlLink && (
            <div
              key={item.label}
              id={`tab-${index}`}
              role="tabpanel"
              aria-labelledby={`tabpanel-${index}`}
              hidden={activeIndex !== index}
              className="tab-panel"
            >
              {item.content}
            </div>
          )
      )}
    </div>
  );
};
