import * as scalable from "./scalable"
export * from "./scalable"
export * from "./routes"

/**
 * Emitted API error
 */
export interface Error {
  code: number
  description: string
}

/**
 * @property api_version - the numeric version, containing major and minor parts (such as 3.21)
 * @property build - the build of the software
 * @property started_at - Date that the server was last started
 */
export interface Status {
  api_version: number
  build: string
  started_at: scalable.Date
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
