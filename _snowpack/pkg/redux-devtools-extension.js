import { c as createCommonjsModule } from './common/_commonjsHelpers-0597c316.js';
import { r as redux } from './common/redux-c4f4ae2f.js';

var reduxDevtoolsExtension = createCommonjsModule(function (module, exports) {

var compose = redux.compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);
});

var composeWithDevTools = reduxDevtoolsExtension.composeWithDevTools;
export { composeWithDevTools };
