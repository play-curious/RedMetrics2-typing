import * as api from "./types/api";
import * as _axios from "axios";
import type * as express from "express";
export declare type Insert<T extends {
    id: number | string;
}> = Omit<T, "id">;
export declare type Update<T> = Partial<T>;
export declare function setupConfig(config: _axios.AxiosRequestConfig): _axios.AxiosRequestConfig<any>;
export declare function getAxiosInstance(): _axios.AxiosInstance;
export declare function request<Item extends api.Item, Method extends keyof Item["Methods"] & string = keyof Item["Methods"] & string, Target extends Item["Methods"][Method] & api.MethodObject = Item["Methods"][Method] & api.MethodObject>(method: Method, route: Item["Route"], body: Target["Body"], config?: _axios.AxiosRequestConfig): Promise<{
    data: Target["Response"];
    headers: _axios.AxiosResponseHeaders;
}>;
export declare function buildRouteMaker(router: express.Router): <Item extends api.Item, Method extends keyof Item["Methods"] & string = keyof Item["Methods"] & string, Target extends Item["Methods"][Method] & api.MethodObject = Item["Methods"][Method] & api.MethodObject>(method: Method, route: Item["Route"], ...listeners: express.RequestHandler[]) => void;
export declare function createRoute<Item extends api.Item, Method extends keyof Item["Methods"] & string = keyof Item["Methods"] & string, Target extends Item["Methods"][Method] & api.MethodObject = Item["Methods"][Method] & api.MethodObject>(router: express.Router, method: Method, route: Item["Route"], ...listeners: express.RequestHandler[]): void;
