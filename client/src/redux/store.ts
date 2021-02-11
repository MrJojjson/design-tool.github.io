import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const { SNOWPACK_PUBLIC_ENV } = import.meta.env;
import window from 'global/window';

if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object' && SNOWPACK_PUBLIC_ENV === 'PROD') {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {};
}

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && SNOWPACK_PUBLIC_ENV !== 'PROD'
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (p: unknown) => p,
    ),
);
