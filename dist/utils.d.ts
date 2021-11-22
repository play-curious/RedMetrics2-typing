import * as _axios from "axios";
import * as api from "./types/api";
export declare type Insert<T extends {
    id: number | string;
}> = Omit<T, "id">;
export declare type Update<T> = Partial<T>;
export declare function setupConfig(config: _axios.AxiosRequestConfig): void;
export declare function request<Item extends api.Item, Method extends keyof Item["Methods"] & string = keyof Item["Methods"] & string, Target extends Item["Methods"][Method] & api.MethodObject = Item["Methods"][Method] & api.MethodObject>(method: Method, route: Item["Route"], body: Target["Body"]): Promise<Target["Response"]>;
