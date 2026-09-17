import { ERROR_CODE } from "../common/index.js";

const AUTHORIZATION_ERROR: string = `${ERROR_CODE}.authorization`;
const ACCESS_TOKEN_ERROR: string = `${ERROR_CODE}.access-token`;

export const AuthorizationCodes = {
  BAD_CREDENTIALS: `${AUTHORIZATION_ERROR}.bad-credentials`,
  ACCESS_DENIED: `${AUTHORIZATION_ERROR}.access-denied`,
  UNAUTHORIZED: `${AUTHORIZATION_ERROR}.unauthorized`,
  ACCESS_TOKEN: {
    UNDEFINED: `${ACCESS_TOKEN_ERROR}.undefined`,
    NOT_JWT: `${ACCESS_TOKEN_ERROR}.not-jwt`,
  },
} as const;
