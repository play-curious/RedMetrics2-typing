import * as tables from "../tables"
import * as base from "../base"
import * as full from "../full"
import { Item } from "../api"

export interface Session extends Item {
  Route: "/session"
  Methods: {
    Post: {
      Body: Omit<
        tables.Session,
        "id" | "game_id" | "created_timestamp" | "updated_timestamp" | "closed"
      >
      Response: Pick<tables.Session, "id">
    }
  }
}

export interface SessionById extends Item {
  Route: `/session/${string}`
  Params: {
    id: tables.Session["id"]
  }
  Methods: {
    Get: {
      Response: tables.Session
    }
    Put: {
      Body: Pick<
        tables.Session,
        | "custom_data"
        | "software"
        | "screen_size"
        | "platform"
        | "external_id"
        | "closed"
      >
      Response: void
    }
  }
}

export interface SessionById_Data extends Item {
  Route: `/session/${tables.Session["id"]}/data`
  Methods: {
    Get: {
      Response: full.FullSession
    }
  }
}

export interface SessionById_Events extends Item {
  Route: `/session/${tables.Session["id"]}/events`
  Methods: {
    Get: {
      Response: tables.Event[]
    }
  }
}

export interface SessionById_EventCount extends Item {
  Route: `/session/${tables.Session["id"]}/events/count`
  Methods: {
    Get: {
      Response: number
    }
  }
}

export interface Event extends Item {
  Route: "/event"
  Methods: {
    Get: {
      Body: Partial<{
        game_id: tables.Game["id"]
        session_id: tables.Session["id"]
        type: base.EventType
        section: base.Section
        after: base.Date
        before: base.Date
        offset: number
        count: number
      }>
      Response: tables.Event[]
    }
    Post:
      | {
          Body: Omit<tables.Event, "id" | "server_time">[]
          Response: void
        }
      | {
          Body: Omit<tables.Event, "id" | "server_time">
          Response: void
        }
  }
}
