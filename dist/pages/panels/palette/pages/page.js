import React from "../../../../../_snowpack/pkg/react.js";
import {useDispatch, useSelector} from "../../../../../_snowpack/pkg/react-redux.js";
import {menuPage} from "../../../../redux/actions/pageAction.js";
import {PageMenu} from "./menu.js";
export const Page = ({title, id}) => {
  const dispatch = useDispatch();
  const {active, edit, menu, defined = []} = useSelector(({pages}) => pages);
  return /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("button", {
    onClick: () => dispatch(menuPage({id}))
  }, ":"), menu === id && /* @__PURE__ */ React.createElement(PageMenu, {
    id
  }));
};
