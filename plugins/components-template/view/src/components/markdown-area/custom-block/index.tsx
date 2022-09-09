import React from "react";
import classNames from "classnames";

import "./style.scss";

export const containerDirective = ({ children, name, attributes }) => {
  if (name === "details") {
    return (
      <details
        {...attributes}
        className={classNames(`${name} custom-block`, attributes.class)}
      >
        <summary>{attributes.title}</summary>
        {children}
      </details>
    );
  }
  return (
    <div
      {...attributes}
      className={classNames(`${name} custom-block`, attributes.class)}
    >
      <p className="custom-block-title">{attributes.title}</p>
      {children}
    </div>
  );
};

export const textDirective = ({ children }) => children;
export const leftDirective = ({ children }) => children;
