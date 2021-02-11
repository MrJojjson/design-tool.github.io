import {useCallback, useState} from "../../_snowpack/pkg/react.js";
const initPos = {x: 0, y: 0};
export const useDrag = () => {
  const [pos, setPos] = useState(initPos);
  const [dragging, setDragging] = useState(false);
  const onDrag = useCallback(({clientX: x, clientY: y, button, ...rest}) => {
    if (button !== 0 || !x || !y)
      return;
    setDragging(true);
    setPos({x, y});
  }, []);
  const onDragEnd = useCallback(() => {
    setDragging(false);
  }, []);
  return {pos, dragging, onDrag, onDragEnd};
};
