import React from "../../../../_snowpack/pkg/react.js";
import {Text} from "../text/index.js";
import "./input.style.css.proxy.js";
export const Input = ({onChange, label, theme, error, ...rest}) => {
  console.log("error", error);
  return /* @__PURE__ */ React.createElement("div", {
    className: `input-wrapper error--${error ? "show" : "hide"}`
  }, /* @__PURE__ */ React.createElement("input", {
    onChange: (event) => onChange(event),
    ...rest
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: rest.id
  }, label), /* @__PURE__ */ React.createElement(Text, {
    theme: "secondary",
    className: "error"
  }, error));
};
