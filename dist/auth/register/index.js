import React, {useState} from "../../../_snowpack/pkg/react.js";
import {Text} from "../../components/atoms/text/index.js";
import {Input} from "../../components/atoms/input/index.js";
import {Button} from "../../components/atoms/button/index.js";
import {Divider} from "../../components/atoms/divider/index.js";
import {Link} from "../../components/atoms/link/index.js";
import {userRegisterUserMutation} from "../../hooks/useRegisterUser.js";
import {REGISTER_USER} from "../../api/authApi.js";
import "../auth.style.css.proxy.js";
export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [registerUser] = userRegisterUserMutation(REGISTER_USER);
  const handleRegisterUser = (e) => {
    e.preventDefault();
    registerUser({
      variables: {name, email, password, confirmPassword},
      update: (cache, {data: {registerUser: registerUser2}}) => {
        console.log("registerUser", registerUser2);
      }
    });
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "register"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title"
  }, /* @__PURE__ */ React.createElement(Text, {
    tag: "h2",
    fontSize: "m"
  }, "Register new user for `Design Tool?`")), /* @__PURE__ */ React.createElement("form", {
    className: "form",
    noValidate: true,
    onSubmit: (e) => handleRegisterUser(e)
  }, /* @__PURE__ */ React.createElement(Input, {
    onChange: ({currentTarget}) => setName(currentTarget.value),
    label: "Name",
    placeholder: "John Doe",
    id: "name",
    type: "text",
    autoComplete: "name",
    error: "No name added"
  }), /* @__PURE__ */ React.createElement(Input, {
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
  }), /* @__PURE__ */ React.createElement(Input, {
    onChange: ({currentTarget}) => setConfirmPassword(currentTarget.value),
    label: "Confirm Password",
    placeholder: "Confirm password",
    id: "confirmpassword",
    type: "password",
    autoComplete: "new-password"
  }), /* @__PURE__ */ React.createElement(Button, {
    label: "Register",
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
    to: "/login",
    title: "Login to existing account",
    fontSize: "l"
  })));
};
