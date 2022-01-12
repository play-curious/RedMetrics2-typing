import * as scalable from "./scalable"
export * from "./routes"

/**
 * Emitted API error
 */
export interface Error {
  code: number
  description: string
}

export interface Status {
  /** the numeric version, containing major and minor parts (such as 3.21) */
  apiVersion: number
  /** the build of the software */
  build: string
  /** Date that the server was last started */
  startedAt: scalable.DateResolvable
}

export interface Item {
  Route: `/${string}`
  Params?: any
  Methods: {
    Get?: MethodObject
    Post?: MethodObject
    Delete?: MethodObject
    Patch?: MethodObject
    Put?: MethodObject
  }
}

export interface MethodObject {
  Body?: any
  Response: any
}

export type Methods = "Get" | "Post" | "Delete" | "Put" | "Patch"

export interface PagingParameters {
  /** number of page (from 1 to X) */
  page: number
  /** number of items per page, limited by ``API_MAX_LIMIT_PER_PAGE`` env variable */
  perPage: number
}

export interface SortingParameters {
  sortBy: `${string} ${"asc" | "desc"}`
}

export interface SessionParameters {
  apiKey: string
}

export type AllParameters =
  | PagingParameters & SortingParameters & SessionParameters

export interface PagingHeaders {
  "X-Per-Page-Count": `${number}`
  "X-Total-Count": `${number}`
  "X-Page-Count": `${number}`
  "X-Page-Number": `${number}`
  Link: string
}
