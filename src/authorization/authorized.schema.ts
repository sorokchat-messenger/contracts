import z from "zod";
import { AuthorizationCodes } from "./codes.js";

const JWT_REGEXP = /^[A-Za-z0-9_-]{2,}\.[A-Za-z0-9_-]{2,}\.[A-Za-z0-9_-]+$/;

export const AuthorizedSchema = z.object({
  accessToken: z
    .string({ error: AuthorizationCodes.ACCESS_TOKEN.UNDEFINED })
    .regex(JWT_REGEXP, { error: AuthorizationCodes.ACCESS_TOKEN.NOT_JWT }),
});

export type AuthorizedPayload = z.infer<typeof AuthorizedSchema>;
