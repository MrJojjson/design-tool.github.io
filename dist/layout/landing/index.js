import React from "../../../_snowpack/pkg/react.js";
import {Link} from "../../../_snowpack/pkg/@reach/router.js";
export const Landing = () => {
  return /* @__PURE__ */ React.createElement("div", {
    style: {height: "75vh"},
    className: "container valign-wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col s12 center-align"
  }, /* @__PURE__ */ React.createElement("h4", null, /* @__PURE__ */ React.createElement("b", null, "Build"), " a login/auth app with the ", /* @__PURE__ */ React.createElement("span", {
    style: {fontFamily: "monospace"}
  }, "MERN"), " ", "stack from scratch"), /* @__PURE__ */ React.createElement("p", {
    className: "flow-text grey-text text-darken-1"
  }, "Create a (minimal) full-stack app with user authentication via passport and JWTs"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
    className: "col s6"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/register",
    style: {
      width: "140px",
      borderRadius: "3px",
      letterSpacing: "1.5px"
    },
    className: "btn btn-large waves-effect waves-light hoverable blue accent-3"
  }, "Register")), /* @__PURE__ */ React.createElement("div", {
    className: "col s6"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/login",
    style: {
      width: "140px",
      borderRadius: "3px",
      letterSpacing: "1.5px"
    },
    className: "btn btn-large btn-flat waves-effect white black-text"
  }, "Log In")))));
};
