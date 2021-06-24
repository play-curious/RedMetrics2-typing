import * as tables from "../tables";
import { Item } from "../api";
export interface Game extends Item {
    Route: "/game";
    Get: {
        Response: tables.Game[];
    };
    Post: {
        Body: Omit<tables.Game, "id">;
        Response: tables.Game;
    };
}
export interface GameById extends Item {
    Route: "/game/:id";
    Params: {
        id: tables.Game["id"];
    };
    Get: {
        Response: tables.Game;
    };
    Put: {
        Response: void;
    };
    Delete: {
        Response: void;
    };
}
