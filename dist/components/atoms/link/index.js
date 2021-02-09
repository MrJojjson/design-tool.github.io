import React from "../../../../_snowpack/pkg/react.js";
import {Link as ReachLink} from "../../../../_snowpack/pkg/@reach/router.js";
import "./link.style.css.proxy.js";
export const Link = ({to, title, theme = "primary", fontSize = "m"}) => {
  return /* @__PURE__ */ React.createElement(ReachLink, {
    to,
    className: `link ${theme} ${fontSize}`
  }, title);
};
