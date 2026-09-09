import { ERROR_CODE } from "../common/index.js";

const AUTHORIZATION_ERROR: string = `${ERROR_CODE}.authorization`;

export const AuthorizationCodes = {
  BAD_CREDENTIALS: `${AUTHORIZATION_ERROR}.bad-credentials`,
  ACCESS_DENIED: `${AUTHORIZATION_ERROR}.access-denied`,
  UNAUTHORIZED: `${AUTHORIZATION_ERROR}.unauthorized`,
} as const;
