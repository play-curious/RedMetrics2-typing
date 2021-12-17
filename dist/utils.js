"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoute = exports.buildRouteMaker = exports.request = exports.getAxiosInstance = exports.setupConfig = void 0;
const axios_1 = __importDefault(require("axios"));
let rest;
function setupConfig(config) {
    rest = axios_1.default.create(config);
    return config;
}
exports.setupConfig = setupConfig;
function getAxiosInstance() {
    if (!rest)
        throw new Error("Axios config not defined. Please call the utils.setupConfig() method!");
    return rest;
}
exports.getAxiosInstance = getAxiosInstance;
async function request(method, route, body, config) {
    if (!rest)
        throw new Error("Axios config not defined. Please call the utils.setupConfig() method!");
    const _method = method.toLowerCase();
    switch (_method) {
        case "get":
        case "delete":
            return rest.get(route, config).then((response) => ({
                data: response.data,
                headers: response.headers,
            }));
        default:
            return rest[_method](route, body, config).then((response) => ({
                data: response.data,
                headers: response.headers,
            }));
    }
}
exports.request = request;
function buildRouteMaker(router) {
    return function route(method, route, ...listeners) {
        createRoute(router, method, route, ...listeners);
    };
}
exports.buildRouteMaker = buildRouteMaker;
function createRoute(router, method, route, ...listeners) {
    const _method = method.toLowerCase();
    router[_method](route, ...listeners);
}
exports.createRoute = createRoute;
