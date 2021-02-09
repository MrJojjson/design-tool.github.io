function n(u){return function(e){var a=e.dispatch,i=e.getState;return function(f){return function(t){return typeof t=="function"?t(a,i,u):f(t)}}}}var r=n();r.withExtraArgument=n;export default r;
