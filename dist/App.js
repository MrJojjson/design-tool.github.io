import React from "../_snowpack/pkg/react.js";
import {Router} from "../_snowpack/pkg/@reach/router.js";
import {Landing} from "./layout/landing/index.js";
import {Navbar} from "./layout/navbar/index.js";
import {Register} from "./auth/register/index.js";
import {Login} from "./auth/login/index.js";
const Route = (props) => props.component;
export const App = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "app"
  }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement(Router, {
    className: "router"
  }, /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    component: /* @__PURE__ */ React.createElement(Landing, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/register",
    component: /* @__PURE__ */ React.createElement(Register, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/login",
    component: /* @__PURE__ */ React.createElement(Login, null)
  }))));
};
