import * as tables from "./tables";
export declare type FullSession = tables.Session & {
    events: tables.Event[];
};
export declare type FullGame = tables.Game & {
    sessions: FullSession[];
};
