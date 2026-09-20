import { HttpStatus } from "./http-status.js";
import { BAD_REQUEST_ERROR_CODE } from "./codes.js";
import type { ErrorPayload } from "./schemas/index.js";

export function createBadRequestError(
  errors: Record<string, string>,
): ErrorPayload {
  return {
    message: BAD_REQUEST_ERROR_CODE,
    status: HttpStatus.BAD_REQUEST,
    errors,
  };
}
