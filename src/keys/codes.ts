import { ERROR_CODE } from "../common/index.js";

const KEYS_ERROR_CODE: string = `${ERROR_CODE}.keys`;
const IDENTITY_KEY_ERROR_CODE: string = `${KEYS_ERROR_CODE}.identity-key`;
const KEY_PACKAGE_ERROR_CODE: string = `${KEYS_ERROR_CODE}.package`;
const ID_ERROR_CODE: string = `${KEYS_ERROR_CODE}.id`;
const KEY_ERROR_CODE: string = `${KEYS_ERROR_CODE}.key`;
const SIGNATURE_ERROR_CODE: string = `${KEYS_ERROR_CODE}.signature`;

export const KEYS_CODES = {
    IDENTITY_KEY: {
        EXISTS: `${IDENTITY_KEY_ERROR_CODE}.exists`,
        MISMATCH: `${IDENTITY_KEY_ERROR_CODE}.mismatch`,
        NOT_FOUND: `${IDENTITY_KEY_ERROR_CODE}.not-found`
    },
    KEY_PACKAGE: {
        NOT_FOUND: `${KEY_PACKAGE_ERROR_CODE}.not-found`,
    },
    ID: {
        INCORRECT: `${ID_ERROR_CODE}.incorrect`
    },
    KEY: {
        INCORRECT: `${KEY_ERROR_CODE}.incorrect`,
        NOT_SIGNED: `${KEY_ERROR_CODE}.not-signed`
    },
    SIGNATURE: {
        INCORRECT: `${SIGNATURE_ERROR_CODE}.incorrect`
    }
} as const;