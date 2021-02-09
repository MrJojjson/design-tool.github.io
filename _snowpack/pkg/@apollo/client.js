export { s as gql } from '../common/index-416d977c.js';
import { i as invariant, e as equal, _ as __assign } from '../common/index-8ed85517.js';
export { A as ApolloClient, a as ApolloLink, I as InMemoryCache, c as createHttpLink } from '../common/index-8ed85517.js';
import { r as react } from '../common/index-927aee77.js';
import { g as getApolloContext, Q as QueryData } from '../common/useMutation-3f0b9757.js';
export { u as useMutation } from '../common/useMutation-3f0b9757.js';
import '../common/blockString-d58f1b60.js';
import '../common/_commonjsHelpers-0597c316.js';

var ApolloProvider = function (_a) {
    var client = _a.client, children = _a.children;
    var ApolloContext = getApolloContext();
    return react.createElement(ApolloContext.Consumer, null, function (context) {
        if (context === void 0) { context = {}; }
        if (client && context.client !== client) {
            context = Object.assign({}, context, { client: client });
        }
         invariant(context.client, 28) ;
        return (react.createElement(ApolloContext.Provider, { value: context }, children));
    });
};

function useDeepMemo(memoFn, key) {
    var ref = react.useRef();
    if (!ref.current || !equal(key, ref.current.key)) {
        ref.current = { key: key, value: memoFn() };
    }
    return ref.current.value;
}

function useBaseQuery(query, options, lazy) {
    if (lazy === void 0) { lazy = false; }
    var context = react.useContext(getApolloContext());
    var _a = react.useReducer(function (x) { return x + 1; }, 0), tick = _a[0], forceUpdate = _a[1];
    var updatedOptions = options ? __assign(__assign({}, options), { query: query }) : { query: query };
    var queryDataRef = react.useRef();
    var queryData = queryDataRef.current ||
        new QueryData({
            options: updatedOptions,
            context: context,
            onNewData: function () {
                if (!queryData.ssrInitiated()) {
                    Promise.resolve().then(forceUpdate);
                }
                else {
                    forceUpdate();
                }
            }
        });
    queryData.setOptions(updatedOptions);
    queryData.context = context;
    if (queryData.ssrInitiated() && !queryDataRef.current) {
        queryDataRef.current = queryData;
    }
    var memo = {
        options: __assign(__assign({}, updatedOptions), { onError: undefined, onCompleted: undefined }),
        context: context,
        tick: tick
    };
    var result = useDeepMemo(function () { return (lazy ? queryData.executeLazy() : queryData.execute()); }, memo);
    var queryResult = lazy
        ? result[1]
        : result;
    react.useEffect(function () {
        if (!queryDataRef.current) {
            queryDataRef.current = queryData;
        }
        return function () { return queryData.cleanup(); };
    }, []);
    react.useEffect(function () { return queryData.afterExecute({ lazy: lazy }); }, [
        queryResult.loading,
        queryResult.networkStatus,
        queryResult.error,
        queryResult.data,
    ]);
    return result;
}

function useQuery(query, options) {
    return useBaseQuery(query, options, false);
}

export { ApolloProvider, useQuery };
