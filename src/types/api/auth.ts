import * as tables from "../tables"

export interface Logout {
  Get: {
    Response: void
  }
}

export interface Login {
  Post: {
    Body: Pick<tables.Account, "email" | "password">
    Response: {
      token: string
    }
  }
}

export interface Register {
  Post: {
    Body: Pick<tables.Account, "email" | "password" | "is_admin">
    Response: {
      id: tables.Account["id"]
      token: string
    }
  }
}

export interface Account {
  Get: {
    Response: tables.Account
  }
}

export interface AccountById {
  Params: {
    id: tables.Account["id"]
  }
  Get: {
    Response: tables.Account
  }
  Delete: {
    Response: void
  }
  Put: {
    Body: Partial<Register["Post"]["Body"]>
    Response: {
      id: tables.Account["id"]
    }
  }
}

export interface Accounts {
  Get: {
    Response: tables.Account[]
  }
}

export interface Key {
  Post: {
    Body: Pick<tables.ApiKey, "name" | "game_id">
    Response: tables.ApiKey
  }
}

export interface KeyByKey {
  Params: {
    key: tables.ApiKey["key"]
  }
  Delete: {
    Response: void
  }
}

export interface Keys {
  Get: {
    Response: tables.ApiKey[]
  }
  Delete: {
    Response: void
  }
}
