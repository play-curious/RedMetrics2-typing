import * as tables from "./tables";
import * as utils from "../utils";
export declare type FullSession = utils.SnakeToCamelCaseNested<tables.Session> & {
    events: utils.SnakeToCamelCaseNested<tables.Event>[];
};
export declare type FullGame = utils.SnakeToCamelCaseNested<tables.Game> & {
    sessions: utils.SnakeToCamelCaseNested<FullSession>[];
};
