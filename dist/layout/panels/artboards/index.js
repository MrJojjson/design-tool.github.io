import {map} from "../../../../_snowpack/pkg/ramda.js";
import React from "../../../../_snowpack/pkg/react.js";
import {useDispatch, useSelector} from "../../../../_snowpack/pkg/react-redux.js";
import {addArtboard} from "../../../redux/actions/artboardAction.js";
import {getPageArtboards} from "../../../redux/selectors/artboardSelector.js";
import {Artboard} from "./artboard.js";
import "./artboardStyle.css.proxy.js";
export const Artboards = () => {
  const dispatch = useDispatch();
  const {active: pageId} = useSelector(({pages}) => pages);
  const artboards = useSelector((state) => getPageArtboards({state, pageId}));
  return /* @__PURE__ */ React.createElement("div", {
    className: "artboards"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => dispatch(addArtboard({pageId}))
  }, "Add artboard"), /* @__PURE__ */ React.createElement("div", {
    className: "artboards-content"
  }, map((props) => /* @__PURE__ */ React.createElement(Artboard, {
    ...props
  }), artboards)));
};
