"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidEmail = exports.isHash = exports.permissions = exports.Permission = void 0;
var Permission;
(function (Permission) {
    /**
     * Includes SHOW_ACCOUNTS, CREATE_ACCOUNTS, DELETE_ACCOUNTS and EDIT_ACCOUNTS. <br/>
     * By default, everyone can edit or delete he own account.
     */
    Permission["MANAGE_ACCOUNTS"] = "manageAccounts";
    Permission["SHOW_ACCOUNTS"] = "showAccounts";
    Permission["CREATE_ACCOUNTS"] = "createAccounts";
    Permission["DELETE_ACCOUNTS"] = "deleteAccounts";
    Permission["EDIT_ACCOUNTS"] = "editAccounts";
    /**
     * Includes SHOW_GAMES, CREATE_GAMES, DELETE_GAMES and EDIT_GAMES.
     */
    Permission["MANAGE_GAMES"] = "manageGames";
    Permission["SHOW_GAMES"] = "showGames";
    Permission["CREATE_GAMES"] = "createGames";
    Permission["DELETE_GAMES"] = "deleteGames";
    Permission["EDIT_GAMES"] = "editGames";
})(Permission = exports.Permission || (exports.Permission = {}));
exports.permissions = {
    user: [],
    dev: [Permission.CREATE_GAMES, Permission.SHOW_GAMES],
    admin: [Permission.MANAGE_ACCOUNTS, Permission.MANAGE_GAMES],
};
function isHash(str) {
    return str.length === 60;
}
exports.isHash = isHash;
function isValidEmail(email) {
    return (typeof email === "string" &&
        !/\s/.test(email) &&
        email.includes("@") &&
        email.includes("."));
}
exports.isValidEmail = isValidEmail;
