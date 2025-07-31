import React from "react";
import { Link } from "react-router-dom";
import "./breadcrumbs.css";

export interface BreadcrumbsProps {
  items: { text: string; urlLink?: string }[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.text} className="breadcrumb-item">
              {isLast || !item.urlLink ? (
                <span aria-current="page">{item.text}</span>
              ) : (
                <Link to={item.urlLink} aria-label={`Go to ${item.text}`}>
                  {item.text}
                </Link>
              )}
              {!isLast && <span className="separator"> &gt; </span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
