import * as tables from "./tables"

export type FullSession = tables.Session & { events: tables.Event[] }
export type FullGame = tables.Game & { sessions: tables.Session[] }
