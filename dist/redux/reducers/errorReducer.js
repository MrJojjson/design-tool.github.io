import {GET_ERRORS} from "../types/errorTypes.js";
const initialState = {};
export const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
};
