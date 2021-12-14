import type * as api from "./api";
import type * as full from "./full";
import type * as tables from "./tables";
import type * as scalable from "./scalable";
export interface Logout extends api.Item {
    Route: "/logout";
    Methods: {
        Get: {
            Response: void;
        };
    };
}
export interface Login extends api.Item {
    Route: "/login";
    Methods: {
        Post: {
            Body: Pick<tables.Account, "email" | "password">;
            Response: {
                token: string;
            };
        };
    };
}
export interface Register extends api.Item {
    Route: "/register";
    Methods: {
        Post: {
            Body: Pick<tables.Account, "email" | "password">;
            Response: {
                id: tables.Account["id"];
                token: string;
            };
        };
    };
}
export interface Account extends api.Item {
    Route: "/account";
    Methods: {
        Get: {
            Response: tables.Account;
        };
        Post: {
            Body: Pick<tables.Account, "email" | "password" | "is_admin">;
            Response: void;
        };
    };
}
export interface AccountById extends api.Item {
    Route: `/account/${tables.Account["id"]}`;
    Methods: {
        Get: {
            Response: tables.Account;
        };
        Delete: {
            Response: void;
        };
        Put: {
            Body: Pick<tables.Account, "email" | "is_admin"> & {
                new_password?: tables.Account["password"];
                old_password?: tables.Account["password"];
            };
            Response: {
                id: tables.Account["id"];
            };
        };
    };
}
export interface AccountById_Keys extends api.Item {
    Route: `/account/${tables.Account["id"]}/keys`;
    Methods: {
        Get: {
            Response: tables.ApiKey[];
        };
    };
}
export interface Accounts extends api.Item {
    Route: "/accounts";
    Methods: {
        Get: {
            Response: tables.Account[];
        };
    };
}
export interface AccountCount extends api.Item {
    Route: "/accounts/count";
    Methods: {
        Get: {
            Response: number;
        };
    };
}
export interface Key extends api.Item {
    Route: "/key";
    Methods: {
        Post: {
            Body: Pick<tables.ApiKey, "description" | "game_id">;
            Response: tables.ApiKey;
        };
        Get: {
            Response: tables.ApiKey;
        };
        Delete: {
            Response: void;
        };
    };
}
export interface KeyByKey extends api.Item {
    Route: `/key/${tables.ApiKey["key"]}`;
    Methods: {
        Delete: {
            Response: void;
        };
    };
}
export interface LostPassword extends api.Item {
    Route: "/lost-password";
    Methods: {
        /** Send email and wait digit confirmation key */
        Post: {
            Body: {
                email: string;
            };
            Response: void;
        };
        /** Send email including new temporary generated password */
        Patch: {
            Body: {
                code: string;
            };
            Response: void;
        };
    };
}
export interface ConfirmEmail extends api.Item {
    Route: "/confirm-email";
    Methods: {
        /** Send email with digit confirmation key */
        Post: {
            Response: void;
        };
        /** Confirm account if digit code is good */
        Patch: {
            Body: {
                code: string;
            };
            Response: void;
        };
    };
}
export interface Session extends api.Item {
    Route: "/session";
    Methods: {
        Post: {
            Body: Omit<tables.Session, "id" | "game_id" | "created_timestamp" | "updated_timestamp" | "closed">;
            Response: Pick<tables.Session, "id">;
        };
    };
}
export interface SessionById extends api.Item {
    Route: `/session/${string}`;
    Params: {
        id: tables.Session["id"];
    };
    Methods: {
        Get: {
            Response: tables.Session;
        };
        Put: {
            Body: Pick<tables.Session, "custom_data" | "software" | "screen_size" | "platform" | "external_id" | "closed">;
            Response: void;
        };
    };
}
export interface SessionById_Data extends api.Item {
    Route: `/session/${tables.Session["id"]}/data`;
    Methods: {
        Get: {
            Response: full.FullSession;
        };
    };
}
export interface SessionById_Events extends api.Item {
    Route: `/session/${tables.Session["id"]}/events`;
    Methods: {
        Get: {
            Response: tables.Event[];
        };
    };
}
export interface SessionById_EventCount extends api.Item {
    Route: `/session/${tables.Session["id"]}/events/count`;
    Methods: {
        Get: {
            Response: number;
        };
    };
}
export interface Event extends api.Item {
    Route: "/event";
    Methods: {
        Get: {
            Body: Partial<{
                game_id: tables.Game["id"];
                session_id: tables.Session["id"];
                type: scalable.EventType;
                section: scalable.Section;
                after: scalable.Date;
                before: scalable.Date;
                offset: number;
                count: number;
            }>;
            Response: tables.Event[];
        };
        Post: {
            Body: (Omit<tables.Event, "id" | "server_timestamp" | "session_id"> & Partial<Pick<tables.Event, "session_id">>)[];
            Response: Pick<tables.Event, "session_id">;
        } | {
            Body: Omit<tables.Event, "id" | "server_timestamp" | "session_id"> & Partial<Pick<tables.Event, "session_id">>;
            Response: Pick<tables.Event, "session_id">;
        };
    };
}
export interface EventById extends api.Item {
    Route: `/event/${tables.Event["id"]}`;
    Methods: {
        Get: {
            Response: tables.Event;
        };
    };
}
export interface Game extends api.Item {
    Route: "/game";
    Methods: {
        Get: {
            Body: Partial<{
                publisher_id: tables.Account["id"];
                offset: number;
                count: number;
            }>;
            Response: tables.Game[];
        };
        Post: {
            Body: Omit<tables.Game, "id">;
            Response: tables.Game;
        };
    };
}
export interface GameCount extends api.Item {
    Route: "/game/count";
    Method: {
        Get: {
            Response: number;
        };
    };
}
export interface GameById extends api.Item {
    Route: `/game/${tables.Game["id"]}`;
    Methods: {
        Get: {
            Response: tables.Game;
        };
        Put: {
            Body: Partial<Pick<tables.Game, "name" | "description" | "custom_data" | "author">>;
            Response: void;
        };
        Delete: {
            Response: void;
        };
    };
}
export interface GameById_Data extends api.Item {
    Route: `/game/${tables.Game["id"]}/data`;
    Methods: {
        Get: {
            Response: full.FullGame;
        };
    };
}
export interface GameById_Sessions extends api.Item {
    Route: `/game/${tables.Game["id"]}/sessions`;
    Methods: {
        Get: {
            Response: tables.Session[];
        };
    };
}
export interface GameById_SessionCount extends api.Item {
    Route: `/game/${tables.Game["id"]}/sessions/count`;
    Methods: {
        Get: {
            Response: number;
        };
    };
}
