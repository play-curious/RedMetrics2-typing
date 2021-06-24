import * as tables from "../tables";
import { Item } from "../api";
export interface Session extends Item {
    Route: "/session";
    Post: {
        Body: Omit<tables.Session, "id">;
    };
    Response: tables.Session;
}
export interface SessionById extends Item {
    Route: "/session/:id";
    Params: {
        id: tables.Session["id"];
    };
    Get: {
        Response: tables.Session;
    };
    Put: {
        Response: void;
    };
}
export interface SessionById_Events extends Item {
    Route: "/session/:id/events";
    Params: {
        id: tables.Session["id"];
    };
    Get: {
        Response: tables.Event[];
    };
}
export interface SessionsByGameId extends Item {
    Route: "/sessions/:game_id";
    Params: {
        game_id: tables.Game["id"];
    };
    Get: {
        Response: tables.Session[];
    };
}
export interface Event extends Item {
    Route: "/event";
    Get: {
        Response: tables.Event[];
    };
    Post: {
        Body: Omit<tables.Event, "id">;
        Response: tables.Event;
    };
}
