import React from "../../../../_snowpack/pkg/react.js";
import {useDispatch} from "../../../../_snowpack/pkg/react-redux.js";
import {Rnd} from "../../../../_snowpack/pkg/react-rnd.js";
import {removeArtboard} from "../../../redux/actions/artboardAction.js";
import "./artboardStyle.css";
export const Artboard = ({title, id}) => {
  const dispatch = useDispatch();
  return /* @__PURE__ */ React.createElement(Rnd, {
    className: "artboard",
    default: {
      x: 0,
      y: 0,
      width: 200,
      height: 200
    }
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => dispatch(removeArtboard({id}))
  }, "Remove artboard"), /* @__PURE__ */ React.createElement("p", null, title));
};
