import { type ErrorPayload, HttpStatus } from "../common/index.js";
import { AuthorizationCodes } from "./codes.js";

export const UNAUTHORIZED_ERROR: ErrorPayload = {
  message: AuthorizationCodes.UNAUTHORIZED,
  status: HttpStatus.UNAUTHORIZED,
};

export const ACCESS_DENIED_ERROR: ErrorPayload = {
  message: AuthorizationCodes.ACCESS_DENIED,
  status: HttpStatus.FORBIDDEN,
};

export const BAD_CREDENTIALS_ERROR: ErrorPayload = {
  message: AuthorizationCodes.BAD_CREDENTIALS,
  status: HttpStatus.UNAUTHORIZED,
};
