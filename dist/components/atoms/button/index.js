import React from "../../../../_snowpack/pkg/react.js";
import "./button.style.css.proxy.js";
export const Button = ({onClick, label, theme = "primary", ...rest}) => {
  return /* @__PURE__ */ React.createElement("button", {
    onClick: () => onClick,
    className: `button ${theme}`,
    ...rest
  }, label);
};
