import * as scalable from "./scalable";
export * from "./routes";
/**
 * Emitted API error
 */
export interface Error {
    code: number;
    description: string;
}
/**
 * @property api_version - the numeric version, containing major and minor parts (such as 3.21)
 * @property build - the build of the software
 * @property started_at - Date that the server was last started
 */
export interface Status {
    api_version: number;
    build: string;
    started_at: scalable.Date;
}
export interface Item {
    Route: `/${string}`;
    Params?: any;
    Methods: {
        Get?: MethodObject;
        Post?: MethodObject;
        Delete?: MethodObject;
        Patch?: MethodObject;
        Put?: MethodObject;
    };
}
export interface MethodObject {
    Body?: any;
    Response: any;
}
export declare type Methods = "Get" | "Post" | "Delete" | "Put" | "Patch";
export interface PagingHeaders {
    "X-Paging-Item-Count": `${number}`;
    "X-Paging-Page-Index": `${number}`;
    "X-Paging-Page-Count": `${number}`;
    "X-Paging-Page-Item-Count": `${number}`;
    "X-Paging-Previous": string;
    "X-Paging-Next": string;
    "X-Paging-First": string;
    "X-Paging-Last": string;
}
