import { ERROR_CODE } from "../common/index.js";

const USER_ERROR: string = `${ERROR_CODE}.user`;
const ERROR_LOGIN: string = `${USER_ERROR}.login`;
const ERROR_PASSWORD: string = `${USER_ERROR}.password`;
const ERROR_DISPLAY_NAME: string = `${USER_ERROR}.display-name`;
const ERROR_ID: string = `${USER_ERROR}.id`;
export const ERROR_ROLE: string = `${USER_ERROR}.role`;

const MIN_LENGTH: number = 8;
const MAX_LENGTH: number = 100;

export const UserCodes = {
  NOT_FOUND: `${USER_ERROR}.not-found`,
  EXISTS: `${USER_ERROR}.exists`,
  ID: {
    NOT_INTEGER: `${ERROR_ID}.not-integer`,
    NOT_POSITIVE: `${ERROR_ID}.not-positive`,
  },
  LOGIN: {
    UNDEFINED: `${ERROR_LOGIN}.undefined`,
    EMPTY: `${ERROR_LOGIN}.empty`,
  },
  PASSWORD: {
    UNDEFINED: `${ERROR_PASSWORD}.undefined`,
    EMPTY: `${ERROR_PASSWORD}.empty`,
    MIN_LENGTH: {
      VALUE: MIN_LENGTH,
      CODE: `${ERROR_PASSWORD}.min-length`,
    },
    MAX_LENGTH: {
      VALUE: MAX_LENGTH,
      CODE: `${ERROR_PASSWORD}.max-length`,
    },
  },
  DISPLAY_NAME: {
    EMPTY: `${ERROR_DISPLAY_NAME}.empty`,
  },
  ROLE: {
    INVALID: `${ERROR_ROLE}.invalid`,
  },
} as const;
