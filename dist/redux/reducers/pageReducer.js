import {filter} from "../../../_snowpack/pkg/ramda.js";
import {alterReduxArray} from "../../utils/alterRedux.js";
import {
  ACTIVE_PAGE,
  ADD_PAGE,
  REMOVE_PAGE,
  EDIT_PAGE,
  RENAME_PAGE,
  MENU_PAGE
} from "../types/pageTypes.js";
const initialState = {
  active: "",
  edit: "",
  menu: "",
  defined: []
};
export const PageReducer = (state = initialState, action) => {
  const {id} = action;
  switch (action.type) {
    case ACTIVE_PAGE:
      return {
        ...state,
        active: id,
        menu: ""
      };
    case ADD_PAGE:
      return {
        ...state,
        defined: [...state.defined, {title: `New Page #${id}`, id}],
        active: id
      };
    case REMOVE_PAGE:
      const removedDefined = filter(({id: id2}) => id2 !== id2, state.defined);
      return {
        ...state,
        defined: removedDefined,
        edit: "",
        menu: "",
        active: ""
      };
    case EDIT_PAGE:
      return {
        ...state,
        edit: id
      };
    case RENAME_PAGE:
      return {
        ...state,
        defined: alterReduxArray({array: state.defined, id, valueKey: "title", value: action.title}),
        menu: "",
        edit: ""
      };
    case MENU_PAGE:
      return {
        ...state,
        menu: state.menu === id ? "" : id,
        active: ""
      };
  }
  return state;
};
