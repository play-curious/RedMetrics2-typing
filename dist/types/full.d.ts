import * as tables from "./tables";
import * as utils from "../utils";
export declare type FullSession = utils.SnakeToCamelCaseNested<tables.Session> & {
    events: Omit<utils.SnakeToCamelCaseNested<tables.Event>, "sessionId">[];
};
export declare type FullGame = utils.SnakeToCamelCaseNested<tables.Game> & {
    sessions: Omit<utils.SnakeToCamelCaseNested<FullSession>, "gameId">[];
};
