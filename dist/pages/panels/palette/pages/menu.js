import React from "../../../../../_snowpack/pkg/react.js";
import {useDispatch} from "../../../../../_snowpack/pkg/react-redux.js";
import {editPage, removePage} from "../../../../redux/actions/pageAction.js";
export const PageMenu = ({id}) => {
  const dispatch = useDispatch();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    onClick: () => dispatch(removePage({id}))
  }, "Remove"), /* @__PURE__ */ React.createElement("button", {
    onClick: () => dispatch(editPage({id}))
  }, "Rename"));
};
