import React from "../_snowpack/pkg/react.js";
import ReactDOM from "../_snowpack/pkg/react-dom.js";
import {App} from "./App.js";
import "./index.css.proxy.js";
import {Provider} from "../_snowpack/pkg/react-redux.js";
import {store} from "./redux/store.js";
import {ApolloProvider} from "../_snowpack/pkg/@apollo/client.js";
import {apolloClient} from "./apolloClient.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(ApolloProvider, {
  client: apolloClient
}, /* @__PURE__ */ React.createElement(Provider, {
  store
}, /* @__PURE__ */ React.createElement(App, null)))), document.getElementById("root"));
