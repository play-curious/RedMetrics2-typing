import * as base from "./base"
import * as tables from "./tables"

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

export type POSTApiKey = Omit<
  tables.ApiKey,
  "start_at" | "fingerprint" | "account_id"
>

export type POSTGame = Omit<tables.Game, "publisher_id" | "id">
