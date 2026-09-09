import { ERROR_CODE } from "../common/index.js";

const USER_ERROR: string = `${ERROR_CODE}.user`;
const ERROR_LOGIN: string = `${USER_ERROR}.login`;
const ERROR_PASSWORD: string = `${USER_ERROR}.password`;

const MIN_LENGTH: number = 8;
const MAX_LENGTH: number = 100;

export const UserCodes = {
  NOT_FOUND: `${USER_ERROR}.not-found`,
  EXISTS: `${USER_ERROR}.exists`,
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
    EMPTY: `${ERROR_PASSWORD}.empty`,
  },
} as const;
