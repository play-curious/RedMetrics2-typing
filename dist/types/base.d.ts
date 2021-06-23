/**
 * Containing date and time, following the ISO 8601 Extended format. <br>
 * It looks like 2015-01-27T09:44:32.418Z. <br>
 * All times are in UTC, and include milliseconds.
 */
export declare type Date = string;
/**
 * String containing a server-generated unique identifier.
 */
export declare type Id = string;
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
export declare type Coordinate = string;
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
export declare type CustomData = string;
/**
 * String validated by email regex
 */
export declare type Email = string;
export declare type Password = string;
