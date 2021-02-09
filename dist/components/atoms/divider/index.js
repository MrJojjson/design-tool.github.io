import React from "../../../../_snowpack/pkg/react.js";
import {Text} from "../text/index.js";
import "./divider.style.css.proxy.js";
export const Divider = ({width = "100%", theme = "secondary", text}) => {
  if (text) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "divider-with-text",
      style: {width}
    }, /* @__PURE__ */ React.createElement("span", {
      className: `divider ${theme}`
    }), /* @__PURE__ */ React.createElement(Text, {
      oneLine: true
    }, text), /* @__PURE__ */ React.createElement("span", {
      className: `divider ${theme}`
    }));
  }
  return /* @__PURE__ */ React.createElement("span", {
    style: {width},
    className: `divider ${theme}`
  });
};
