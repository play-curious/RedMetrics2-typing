"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = exports.setupConfig = void 0;
const axios_1 = __importDefault(require("axios"));
let rest;
function setupConfig(config) {
    rest = axios_1.default.create(config);
}
exports.setupConfig = setupConfig;
async function request(method, route, body) {
    if (!rest)
        throw new Error("Axios config not defined. Please call the utils.setupConfig() method!");
    const _method = method.toLowerCase();
    return rest[_method](route, body).then((response) => response.data);
}
exports.request = request;
