import React, {useState} from "../_snowpack/pkg/react.js";
export const DragComp = ({initPos = {x: 0, y: 0}}) => {
  const [pos, setPos] = useState(initPos);
  const [dragging, setDragging] = useState(false);
  const onDragEnd = (e) => {
    setDragging(false);
  };
  const onDrag = ({pageX: x, pageY: y, button}) => {
    if (button !== 0 || !x || !y)
      return;
    setDragging(true);
    setPos({x, y});
  };
  return /* @__PURE__ */ React.createElement("div", {
    draggable: "true",
    onDragEnd: (event) => onDragEnd(event),
    onDrag: (event) => onDrag(event),
    className: "App",
    style: {position: "absolute", left: `${pos.x}px`, top: `${pos.y}px`}
  }, "Comp");
};
