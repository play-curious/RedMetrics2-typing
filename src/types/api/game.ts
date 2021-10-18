import * as tables from "../tables"
import { Item } from "../api"

export interface Game extends Item {
  Route: "/game"
  Get: {
    Body: Partial<{
      publisher_id: tables.Account["id"]
      offset: number
      count: number
    }>
    Response: tables.Game[]
  }
  Post: {
    Body: Omit<tables.Game, "id">
    Response: tables.Game
  }
}

export interface GameById extends Item {
  Route: `/game/${tables.Game["id"]}`
  Get: {
    Response: tables.Game
  }
  Put: {
    Body: Partial<
      Pick<tables.Game, "name" | "description" | "custom_data" | "author">
    >
    Response: void
  }
  Delete: {
    Response: void
  }
}

export interface GameById_Data extends Item {
  Route: `/game/${tables.Game["id"]}/data`
  Get: {
    Response: tables.Game & {
      sessions: (tables.Session & { events: tables.Event[] })[]
    }
  }
}
