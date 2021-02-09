import {createStore, applyMiddleware, compose} from "../../_snowpack/pkg/redux.js";
import thunk from "../../_snowpack/pkg/redux-thunk.js";
import {rootReducer} from "./reducers/rootReducer.js";
import {composeWithDevTools} from "../../_snowpack/pkg/redux-devtools-extension.js";
const composeEnhancers = composeWithDevTools({});
export const store = createStore(rootReducer, compose(composeEnhancers(applyMiddleware(thunk))));
