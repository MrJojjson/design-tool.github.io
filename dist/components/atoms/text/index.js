import React from "../../../../_snowpack/pkg/react.js";
import "./text.style.css.proxy.js";
export const Text = ({
  tag = "p",
  children,
  theme = "primary",
  fontSize = "m",
  oneLine,
  className,
  ...rest
}) => {
  return React.createElement(tag, {className: `text ${theme} ${tag} ${fontSize} ${oneLine ? "line" : null} ${className}`, ...rest}, children);
};
