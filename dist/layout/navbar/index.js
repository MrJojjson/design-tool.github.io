import React from "../../../_snowpack/pkg/react.js";
import {Button} from "../../components/atoms/button/index.js";
import {Link} from "../../components/atoms/link/index.js";
import "./navbar.style.css.proxy.js";
export const Navbar = () => {
  return /* @__PURE__ */ React.createElement("nav", {
    className: "navbar"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "profile"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/register",
    title: "Register ",
    theme: "secondary"
  }), /* @__PURE__ */ React.createElement(Link, {
    to: "/login",
    title: "Login ",
    theme: "secondary"
  }), /* @__PURE__ */ React.createElement(Button, {
    label: "Button",
    onClick: () => {
    }
  }), /* @__PURE__ */ React.createElement(Button, {
    label: "Button",
    onClick: () => {
    },
    theme: "secondary"
  })));
};
