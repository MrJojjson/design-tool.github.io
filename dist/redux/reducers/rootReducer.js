import {ErrorReducer} from "./errorReducer.js";
import {combineReducers} from "../../../_snowpack/pkg/redux.js";
import {ArtboardReducer} from "./artboardReducer.js";
import {PageReducer} from "./pageReducer.js";
import {AuthReducer} from "./AuthReducer.js";
export const rootReducer = combineReducers({
  pages: PageReducer,
  artboards: ArtboardReducer,
  auth: AuthReducer,
  errors: ErrorReducer
});
