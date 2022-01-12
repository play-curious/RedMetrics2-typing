import * as api from "./types/api";
import * as _axios from "axios";
import type * as express from "express";
export declare type Insert<T extends {
    id: number | string;
}> = Omit<T, "id">;
export declare type Update<T> = Partial<T>;
export declare function setupConfig(config: _axios.AxiosRequestConfig): _axios.AxiosRequestConfig<any>;
export declare function getAxiosInstance(): _axios.AxiosInstance;
export declare function request<Item extends api.Item, Method extends keyof Item["Methods"] & string = keyof Item["Methods"] & string, Target extends Item["Methods"][Method] & api.MethodObject = Item["Methods"][Method] & api.MethodObject>(method: Method, route: Item["Route"], body: Target["Body"], config?: _axios.AxiosRequestConfig & {
    params: Partial<api.AllParameters>;
}): Promise<_axios.AxiosResponse & {
    data: Target["Response"];
}>;
export declare function buildRouteMaker(router: express.Router): <Item extends api.Item, Method extends keyof Item["Methods"] & string = keyof Item["Methods"] & string, Target extends Item["Methods"][Method] & api.MethodObject = Item["Methods"][Method] & api.MethodObject>(method: Method, route: Item["Route"], ...listeners: express.RequestHandler[]) => void;
export declare function createRoute<Item extends api.Item, Method extends keyof Item["Methods"] & string = keyof Item["Methods"] & string, Target extends Item["Methods"][Method] & api.MethodObject = Item["Methods"][Method] & api.MethodObject>(router: express.Router, method: Method, route: Item["Route"], ...listeners: express.RequestHandler[]): void;
export declare type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}` ? `${Lowercase<T>}${Capitalize<SnakeToCamelCase<U>>}` : S;
export declare type SnakeToCamelCaseNested<T> = T extends (infer E)[] ? SnakeToCamelCaseNested<E>[] : T extends object ? {
    [K in keyof T as SnakeToCamelCase<K & string>]: SnakeToCamelCaseNested<T[K]>;
} : T;
