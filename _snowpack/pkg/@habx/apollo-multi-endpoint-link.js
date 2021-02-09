import { h as hasDirectives, r as removeDirectivesFromDocument, g as getMainDefinition, a as ApolloLink } from '../common/index-8ed85517.js';
import '../common/blockString-d58f1b60.js';
import '../common/_commonjsHelpers-0597c316.js';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var getDirectiveArgumentValueFromOperation = function (operation, directiveName, argumentName) { var _a, _b, _c, _d, _e, _f; return (_f = (_e = (_d = (_c = (_b = (_a = operation.query.definitions.find(function (definition) { return definition.kind === 'OperationDefinition'; })) === null || _a === void 0 ? void 0 : _a.directives) === null || _b === void 0 ? void 0 : _b.find(function (directive) { var _a; return ((_a = directive.name) === null || _a === void 0 ? void 0 : _a.value) === directiveName; })) === null || _c === void 0 ? void 0 : _c.arguments) === null || _d === void 0 ? void 0 : _d.find(function (argument) { var _a; return ((_a = argument.name) === null || _a === void 0 ? void 0 : _a.value) === argumentName; })) === null || _e === void 0 ? void 0 : _e.value) === null || _f === void 0 ? void 0 : _f.value; };
var MultiAPILink = (function (_super) {
    __extends(MultiAPILink, _super);
    function MultiAPILink(config, request) {
        var _this = _super.call(this, request) || this;
        _this.config = config;
        _this.httpLink = config.createHttpLink();
        _this.wsLinks = {};
        return _this;
    }
    MultiAPILink.prototype.request = function (operation, forward) {
        var _a, _b, _c;
        if (!hasDirectives(['api'], operation.query)) {
            return (_a = forward === null || forward === void 0 ? void 0 : forward(operation)) !== null && _a !== void 0 ? _a : null;
        }
        var apiName = getDirectiveArgumentValueFromOperation(operation, 'api', 'name');
        if (!apiName) {
            var contextKey = getDirectiveArgumentValueFromOperation(operation, 'api', 'contextKey');
            if (contextKey) {
                apiName = operation.getContext()[contextKey];
            }
        }
        var query = removeDirectivesFromDocument([{ name: 'api', remove: true }], operation.query);
        if (!query) {
            throw new Error('Error while removing directive api');
        }
        operation.query = query;
        if (this.config.getContext) {
            operation.setContext(this.config.getContext(apiName, operation.getContext));
        }
        if (this.config.endpoints[apiName]) {
            operation.setContext({
                uri: "" + this.config.endpoints[apiName] + ((_b = this.config.httpSuffix) !== null && _b !== void 0 ? _b : '/graphql'),
            });
        }
        var definition = getMainDefinition(operation.query);
        if (definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription') {
            if (!this.config.createWsLink) {
                throw new Error("You tried to call a subscription without configuring \"createWsLink\" function:" + operation.query);
            }
            if (!this.wsLinks[apiName]) {
                var endpoint = this.config.endpoints[apiName];
                var wsEndpoint = endpoint.startsWith('/')
                    ? ("" + window.location.origin + endpoint).replace('http', 'ws')
                    : endpoint.replace('http', 'ws');
                this.wsLinks[apiName] = this.config.createWsLink("" + wsEndpoint + ((_c = this.config.wsSuffix) !== null && _c !== void 0 ? _c : '/graphql/subscriptions'));
            }
            return this.wsLinks[apiName].request(operation, forward);
        }
        return this.httpLink.request(operation, forward);
    };
    return MultiAPILink;
}(ApolloLink));

export { MultiAPILink };
