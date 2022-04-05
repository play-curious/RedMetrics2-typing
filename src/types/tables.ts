import * as base from "./scalable"

export interface Account {
  id: base.Id
  email: base.Email
  password: base.Password
  connection_token?: string
  confirmed?: boolean
  is_admin: boolean
  created_timestamp: base.DateResolvable
}

export interface Confirmation {
  account_id: Account["id"]
  code: string
}

export interface ApiKey {
  description?: string
  start_timestamp: base.DateResolvable
  key: base.Id
  account_id: Account["id"]
  game_id: Game["id"]
}

/**
 * A game  Since RedMetrics data is open, <br>
 * is is vital that no personally identifiable information is stored about a player.
 * @property software - String that can be user agent on browsers.
 * @property external_id - String that can be set by developers in order to link the player with another database. This must not be a personally identifiable marker such as an email address.
 */
export interface Session {
  id: base.Id
  game_id?: Game["id"]
  closed: boolean
  version?: string
  platform?: string
  screen_size?: string
  software?: string
  external_id?: string
  custom_data?: base.CustomData
  updated_timestamp: base.DateResolvable
  created_timestamp: base.DateResolvable
}

/**
 * @property author - Containing the name of the person or organization who created the game
 */
export interface Game {
  id: base.Id
  publisher_id?: Account["id"]
  name: string
  author?: string
  description?: string
  custom_data?: base.CustomData
}

/**
 * @property custom_data - JSON For "gain" and “lose” events, specifies the number of things are gained or lost.
 */
export interface Event {
  id: number
  session_id?: Session["id"]
  type: base.EventType
  server_timestamp: base.DateResolvable
  user_timestamp?: base.DateResolvable
  custom_data?: base.CustomData
  section?: base.Section
  coordinates?: base.Coordinate
}
