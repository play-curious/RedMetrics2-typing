import * as tables from "./tables"
import * as utils from "../utils"

export type FullSession = utils.SnakeToCamelCaseNested<tables.Session> & {
  events: utils.SnakeToCamelCaseNested<tables.Event>[]
}
export type FullGame = utils.SnakeToCamelCaseNested<tables.Game> & {
  sessions: utils.SnakeToCamelCaseNested<FullSession>[]
}
