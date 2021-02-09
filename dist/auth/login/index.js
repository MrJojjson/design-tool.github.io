import React, {useState} from "../../../_snowpack/pkg/react.js";
import {Button} from "../../components/atoms/button/index.js";
import {Divider} from "../../components/atoms/divider/index.js";
import {Input} from "../../components/atoms/input/index.js";
import {Link} from "../../components/atoms/link/index.js";
import {Text} from "../../components/atoms/text/index.js";
import "../auth.style.css.proxy.js";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password
    };
    console.log(userData);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "login"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, /* @__PURE__ */ React.createElement(Text, {
    tag: "h2",
    fontSize: "m"
  }, "Sign in to `Design Tool?`")), /* @__PURE__ */ React.createElement("form", {
    className: "form",
    noValidate: true,
    onSubmit: (e) => onSubmit(e)
  }, /* @__PURE__ */ React.createElement(Input, {
    onChange: ({currentTarget}) => setEmail(currentTarget.value),
    label: "Email",
    placeholder: "abc@abc.com",
    id: "email",
    type: "email",
    autoComplete: "email"
  }), /* @__PURE__ */ React.createElement(Input, {
    onChange: ({currentTarget}) => setPassword(currentTarget.value),
    label: "Password",
    placeholder: "One password to rule them all",
    id: "password",
    type: "password",
    autoComplete: "current-password"
  }), /* @__PURE__ */ React.createElement(Button, {
    label: "Login",
    onClick: () => {
    },
    type: "submit",
    theme: "secondary"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "navigation"
  }, /* @__PURE__ */ React.createElement(Divider, {
    width: "30vw",
    text: "OR"
  }), /* @__PURE__ */ React.createElement(Link, {
    to: "/register",
    title: "Register an account",
    fontSize: "l"
  })));
};
