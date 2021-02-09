import {ACTIVE_ARTBOARD} from "../types/artboardTypes.js";
import {ADD_ARTBOARD, REMOVE_ARTBOARD} from "../types/artboardTypes.js";
export const addArtboard = ({pageId}) => ({
  type: ADD_ARTBOARD,
  pageId
});
export const removeArtboard = ({id}) => ({
  type: REMOVE_ARTBOARD,
  id
});
export const setActiveArtboard = ({id}) => ({
  type: ACTIVE_ARTBOARD,
  id
});
