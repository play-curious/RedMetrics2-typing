export declare enum Permission {
    /**
     * Includes SHOW_ACCOUNTS, CREATE_ACCOUNTS, DELETE_ACCOUNTS and EDIT_ACCOUNTS. <br/>
     * By default, everyone can edit or delete he own account.
     */
    MANAGE_ACCOUNTS = "manageAccounts",
    SHOW_ACCOUNTS = "showAccounts",
    CREATE_ACCOUNTS = "createAccounts",
    DELETE_ACCOUNTS = "deleteAccounts",
    EDIT_ACCOUNTS = "editAccounts",
    /**
     * Includes SHOW_GAMES, CREATE_GAMES, DELETE_GAMES and EDIT_GAMES.
     */
    MANAGE_GAMES = "manageGames",
    SHOW_GAMES = "showGames",
    CREATE_GAMES = "createGames",
    DELETE_GAMES = "deleteGames",
    EDIT_GAMES = "editGames"
}
export declare const permissions: {
    [role: string]: Permission[];
};
/**
 * Containing date and time, following the ISO 8601 Extended format. <br>
 * It looks like 2015-01-27T09:44:32.418Z. <br>
 * All times are in UTC, and include milliseconds.
 */
export declare type RMDate = string;
export declare type Role = "admin" | "dev" | "user";
/**
 * String containing a server-generated unique identifier.
 */
export declare type Id = string;
export interface Account extends User {
    id?: Id;
    password: Hash;
    games?: Id[];
}
export interface ApiKey {
    name: string;
    start_at: RMDate;
    api_key: Id;
    account_id: Id;
    game_id?: Id;
    permissions: Permission[];
    is_connection_key: boolean;
}
export interface RawApiKey {
    name: string;
    start_at: RMDate;
    api_key: Id;
    account_id: Id;
    game_id?: Id;
    permissions: string;
    is_connection_key: boolean;
}
export declare type ApiKeyUser = User & ApiKey;
/**
 * A game  Since RedMetrics data is open, <br>
 * is is vital that no personally identifiable information is stored about a player.
 * @property software - String that can be user agent on browsers.
 * @property external_id - String that can be set by developers in order to link the player with another database. This must not be a personally identifiable marker such as an email address.
 */
export interface Session {
    id?: Id;
    game_version_id: Id;
    platform?: string;
    screen_size?: string;
    software?: string;
    external_id?: string;
    custom_data?: CustomData;
}
export interface RawSession {
    id?: Id;
    game_version_id: Id;
    platform?: string;
    screen_size?: string;
    software?: string;
    external_id?: string;
    custom_data?: string;
}
/**
 * @property author - Containing the name of the person or organization who created the game
 */
export interface Game {
    id?: Id;
    publisher_id?: Id;
    name: string;
    author?: string;
    description?: string;
    custom_data?: CustomData;
}
export interface RawGame {
    id?: Id;
    publisher_id?: Id;
    name: string;
    author?: string;
    description?: string;
    custom_data?: string;
}
export interface GameVersion {
    id?: Id;
    game_id: Id;
    name: string;
    description?: string;
    custom_data?: CustomData;
}
export interface RawGameVersion {
    id?: Id;
    game_id: Id;
    name: string;
    description?: string;
    custom_data?: string;
}
/**
 * naming the type of progress event that occurred.
 */
export declare type EventType = StandardEventType | string;
/**
 * "start" created by default. <br>
 * "end" close the session.
 */
export declare type StandardEventType = "start" | "end" | "win" | "fail" | "restart" | "gain" | "lose";
/**
 * Array of 2 or 3 integers describing where the event occurred in "game space".
 */
export declare type Coordinate = [number, number] | [number, number, number];
/**
 * what "level" the player was in when the event occured. <br>
 * Adding more elements separated by points specifiy the section within a hierarchy. <br>
 * For example, “level1.section2.subsection3”
 */
export declare type Section = string;
/**
 * JSON data associated with the session. <br>
 * This must not contain personally identifiable markers such as name or exact address.
 */
export declare type CustomData = object;
/**
 * @property custom_data - JSON For "gain" and “lose” events, specifies the number of things are gained or lost.
 */
export interface RMEvent {
    id?: number;
    game_session_id: Id;
    type: EventType;
    server_time: RMDate;
    user_time?: RMDate;
    custom_data?: CustomData;
    section?: Section;
    coordinates?: Coordinate;
}
export interface RawRMEvent {
    id?: number;
    game_session_id: Id;
    type: EventType;
    server_time: RMDate;
    user_time?: RMDate;
    section?: Section;
    custom_data?: string;
    coordinates?: string;
}
export interface RMError {
    code: number;
    description: string;
}
/**
 * @property api_version - the numeric version, containing major and minor parts (such as 3.21)
 * @property build - the build of the software
 * @property started_at - Date that the server was last started
 */
export interface Status {
    api_version: number;
    build: string;
    started_at: RMDate;
}
export interface Login {
    email: Email;
    password: Password;
}
export interface User extends Login {
    role: Role;
}
/**
 * String validated by email regex
 */
export declare type Email = string;
export declare type Hash = Password;
export declare type Password = string;
export declare function isHash(str: string): str is Hash;
export declare function isValidEmail(email: any): email is Email;
