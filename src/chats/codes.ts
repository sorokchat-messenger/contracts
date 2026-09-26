import { ERROR_CODE } from "../common/codes.js";

export const CHATS_CODE: string = "chats";
export const ERROR_CHATS_CODE: string = `${ERROR_CODE}.${CHATS_CODE}`;
export const ID_ERROR_CODE: string = `${ERROR_CHATS_CODE}.id`;
export const NAME_ERROR_CODE: string = `${ERROR_CHATS_CODE}.name`;
export const DESCRIPTION_ERROR_CODE: string = `${ERROR_CHATS_CODE}.description`;

export const ChatsCodes = {
    NOT_FOUND: `${ERROR_CHATS_CODE}.not-found`,
    ID: {
        NOT_INTEGER: `${ID_ERROR_CODE}.not-integer`,
        NOT_POSITIVE: `${ID_ERROR_CODE}.not-positive`
    },
    NAME: {
        UNDEFINED: `${NAME_ERROR_CODE}.undefined`,
        EMPTY: `${NAME_ERROR_CODE}.empty`
    },
    DESCRIPTION: {
        EMPTY: `${DESCRIPTION_ERROR_CODE}.empty`
    }
} as const;