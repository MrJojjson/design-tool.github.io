import {
  EDIT_PAGE,
  RENAME_PAGE,
  MENU_PAGE
} from "../types/pageTypes.js";
import {
  ACTIVE_PAGE,
  ADD_PAGE,
  REMOVE_PAGE
} from "../types/pageTypes.js";
export const setActivePage = ({id}) => ({
  type: ACTIVE_PAGE,
  id
});
export const addPage = ({id}) => ({
  type: ADD_PAGE,
  id
});
export const removePage = ({id}) => ({
  type: REMOVE_PAGE,
  id
});
export const editPage = ({id}) => ({
  type: EDIT_PAGE,
  id
});
export const renamePage = ({id, title}) => ({
  type: RENAME_PAGE,
  id,
  title
});
export const menuPage = ({id}) => ({
  type: MENU_PAGE,
  id
});
