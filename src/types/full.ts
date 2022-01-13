import * as tables from "./tables"
import * as utils from "../utils"

export type FullSession = utils.SnakeToCamelCaseNested<tables.Session> & {
  events: Omit<utils.SnakeToCamelCaseNested<tables.Event>, "sessionId">[]
}
export type FullGame = utils.SnakeToCamelCaseNested<tables.Game> & {
  sessions: Omit<utils.SnakeToCamelCaseNested<FullSession>, "gameId">[]
}
