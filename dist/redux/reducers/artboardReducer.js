import {filter} from "../../../_snowpack/pkg/ramda.js";
import {uniqueArtboardId} from "../../utils/uniqueId.js";
import {ACTIVE_ARTBOARD, ADD_ARTBOARD, REMOVE_ARTBOARD} from "../types/artboardTypes.js";
const initialState = {
  defined: [],
  active: "",
  id: ""
};
export const ArtboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTBOARD:
      const uid = uniqueArtboardId();
      return {
        ...state,
        defined: [...state.defined, {title: `New Artboard #${uid}`, id: uid, pageId: action.pageId}]
      };
    case REMOVE_ARTBOARD:
      const removedDefined = filter(({id}) => id !== action.id, state.defined);
      return {
        ...state,
        defined: removedDefined,
        active: ""
      };
    case ACTIVE_ARTBOARD:
      return {
        ...state,
        active: action.id
      };
  }
  return state;
};
