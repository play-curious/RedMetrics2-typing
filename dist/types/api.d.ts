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
export interface PagingParameters {
    /** number of page (from 1 to X) */
    page?: number;
    /** number of items per page, limited by ``API_MAX_LIMIT_PER_PAGE`` env variable */
    perPage?: number;
}
export interface SortingParameters {
    sortBy?: `${"created" | "updated"}_timestamp ${"asc" | "desc"}`;
}
export declare type AllParameters = PagingParameters & SortingParameters;
export interface PagingHeaders {
    "X-Per-Page-Count": `${number}`;
    "X-Total-Count": `${number}`;
    "X-Page-Count": `${number}`;
    "X-Page-Number": `${number}`;
    Link: string;
}
