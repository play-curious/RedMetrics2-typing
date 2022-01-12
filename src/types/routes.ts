import type * as api from "./api"
import type * as full from "./full"
import type * as tables from "./tables"
import type * as scalable from "./scalable"

import type * as utils from "../utils"

export interface Status extends api.Item {
  Route: "/status" | "/"
  Methods: {
    Get: {
      Response: api.Status
    }
  }
}

export interface Logout extends api.Item {
  Route: "/logout"
  Methods: {
    Get: {
      Response: {}
    }
  }
}

export interface Login extends api.Item {
  Route: "/login"
  Methods: {
    Post: {
      Body: Pick<tables.Account, "email" | "password">
      Response: {
        token: string
      }
    }
  }
}

export interface Register extends api.Item {
  Route: "/register"
  Methods: {
    Post: {
      Body: Pick<tables.Account, "email" | "password">
      Response: {
        id: tables.Account["id"]
        token: string
      }
    }
  }
}

export interface Account extends api.Item {
  Route: "/account"
  Methods: {
    Get: {
      Response: utils.SnakeToCamelCaseNested<Omit<tables.Account, "password">>
    }
    Post: {
      Body: utils.SnakeToCamelCaseNested<
        Pick<tables.Account, "email" | "password" | "is_admin">
      >
      Response: {}
    }
  }
}

export interface AccountById extends api.Item {
  Route: `/account/${tables.Account["id"]}`
  Methods: {
    Get: {
      Response: utils.SnakeToCamelCaseNested<Omit<tables.Account, "password">>
    }
    Delete: {
      Response: {}
    }
    Put: {
      Body: utils.SnakeToCamelCaseNested<
        Pick<tables.Account, "email" | "is_admin"> & {
          new_password?: tables.Account["password"]
          old_password?: tables.Account["password"]
        }
      >
      Response: {
        id: tables.Account["id"]
      }
    }
  }
}

export interface AccountById_Key extends api.Item {
  Route: `/account/${tables.Account["id"]}/key`
  Methods: {
    Get: {
      Response: utils.SnakeToCamelCaseNested<tables.ApiKey>[]
    }
  }
}

export interface Accounts extends api.Item {
  Route: "/accounts"
  Methods: {
    Get: {
      Response: utils.SnakeToCamelCaseNested<Omit<tables.Account, "password">>[]
    }
  }
}

export interface Key extends api.Item {
  Route: "/key"
  Methods: {
    Post: {
      Body: utils.SnakeToCamelCaseNested<
        Pick<tables.ApiKey, "description" | "game_id">
      >
      Response: utils.SnakeToCamelCaseNested<tables.ApiKey>
    }
    Get: {
      Response: utils.SnakeToCamelCaseNested<tables.ApiKey>
    }
    Delete: {
      Response: {}
    }
  }
}

export interface KeyByKey extends api.Item {
  Route: `/key/${tables.ApiKey["key"]}`
  Methods: {
    Delete: {
      Response: {}
    }
  }
}

export interface ResetPassword extends api.Item {
  Route: "/reset-password"
  Methods: {
    /** Send email and wait digit confirmation key */
    Post: {
      Body: {
        email: string
      }
      Response: {}
    }
  }
}

export interface ResetPassword_Confirm extends api.Item {
  Route: "/reset-password/confirm"
  Methods: {
    /** Send email including new temporary generated password */
    Post: {
      Body: {
        code: string
      }
      Response: {}
    }
  }
}

export interface CheckEmail extends api.Item {
  Route: "/check-email"
  Methods: {
    /** Send email with digit confirmation key */
    Post: {
      Response: {}
    }
  }
}

export interface CheckEmail_Confirm extends api.Item {
  Route: "/check-email/confirm"
  Methods: {
    /** Confirm account if digit code is good */
    Post: {
      Body: {
        code: string
      }
      Response: {}
    }
  }
}

export interface Session extends api.Item {
  Route: "/session"
  Methods: {
    Post: {
      Body: utils.SnakeToCamelCaseNested<
        Omit<
          tables.Session,
          | "id"
          | "game_id"
          | "created_timestamp"
          | "updated_timestamp"
          | "closed"
        >
      >
      Response: Pick<tables.Session, "id">
    }
  }
}

export interface SessionById extends api.Item {
  Route: `/session/${string}`
  Params: {
    id: tables.Session["id"]
  }
  Methods: {
    Get: {
      Response: utils.SnakeToCamelCaseNested<tables.Session>
    }
    Put: {
      Body: utils.SnakeToCamelCaseNested<
        Pick<
          tables.Session,
          | "custom_data"
          | "software"
          | "screen_size"
          | "platform"
          | "external_id"
          | "closed"
        >
      >
      Response: {}
    }
  }
}

export interface SessionById_Data extends api.Item {
  Route: `/session/${tables.Session["id"]}/data.json`
  Methods: {
    Get: {
      Response: full.FullSession
    }
  }
}

export interface SessionById_Event extends api.Item {
  Route: `/session/${tables.Session["id"]}/event`
  Methods: {
    Get: {
      Response: utils.SnakeToCamelCaseNested<tables.Event>[]
    }
  }
}

export interface Event extends api.Item {
  Route: "/event"
  Methods: {
    Get: {
      Body: utils.SnakeToCamelCaseNested<
        Partial<{
          game_id: tables.Game["id"]
          session_id: tables.Session["id"]
          type: scalable.EventType
          section: scalable.Section
          after: scalable.Date
          before: scalable.Date
          offset: number
          count: number
        }>
      >
      Response: utils.SnakeToCamelCaseNested<tables.Event>[]
    }
    Post:
      | {
          Body: utils.SnakeToCamelCaseNested<
            Omit<tables.Event, "id" | "server_timestamp" | "session_id"> &
              Partial<Pick<tables.Event, "session_id">>
          >[]
          Response: utils.SnakeToCamelCaseNested<
            Pick<tables.Event, "session_id">
          >
        }
      | {
          Body: utils.SnakeToCamelCaseNested<
            Omit<tables.Event, "id" | "server_timestamp" | "session_id"> &
              Partial<Pick<tables.Event, "session_id">>
          >
          Response: utils.SnakeToCamelCaseNested<
            Pick<tables.Event, "session_id">
          >
        }
  }
}

export interface EventById extends api.Item {
  Route: `/event/${tables.Event["id"]}`
  Methods: {
    Get: {
      Response: utils.SnakeToCamelCaseNested<tables.Event>
    }
  }
}

export interface Game extends api.Item {
  Route: "/game"
  Methods: {
    Get: {
      Body: utils.SnakeToCamelCaseNested<
        Partial<{
          publisher_id: tables.Account["id"]
          offset: number
          count: number
        }>
      >
      Response: utils.SnakeToCamelCaseNested<tables.Game>[]
    }
    Post: {
      Body: utils.SnakeToCamelCaseNested<Omit<tables.Game, "id">>
      Response: utils.SnakeToCamelCaseNested<tables.Game>
    }
  }
}

export interface GameById extends api.Item {
  Route: `/game/${tables.Game["id"]}`
  Methods: {
    Get: {
      Response: utils.SnakeToCamelCaseNested<tables.Game>
    }
    Put: {
      Body: utils.SnakeToCamelCaseNested<
        Partial<
          Pick<tables.Game, "name" | "description" | "custom_data" | "author">
        >
      >
      Response: {}
    }
    Delete: {
      Response: {}
    }
  }
}

export interface GameById_Key extends api.Item {
  Route: `/game/${tables.Game["id"]}/key`
  Methods: {
    Get: {
      Response: utils.SnakeToCamelCaseNested<tables.ApiKey>[]
    }
  }
}

export interface GameById_Data extends api.Item {
  Route: `/game/${tables.Game["id"]}/data.json`
  Methods: {
    Get: {
      Response: full.FullGame
    }
  }
}

export interface GameById_Session extends api.Item {
  Route: `/game/${tables.Game["id"]}/session`
  Methods: {
    Get: {
      Response: utils.SnakeToCamelCaseNested<tables.Session>[]
    }
  }
}
