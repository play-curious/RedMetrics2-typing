import * as base from "./base"
export * from "./api/auth"

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
  started_at: base.Date
}
