import { UserCodes } from "./codes.js";
import z from "zod";

export const NewUserSchema = z.object({
  login: z
    .string()
    .nonempty({ message: UserCodes.LOGIN.EMPTY })
    .nonoptional({ message: UserCodes.LOGIN.UNDEFINED }),
  password: z
    .string()
    .min(UserCodes.PASSWORD.MIN_LENGTH.VALUE, {
      message: UserCodes.PASSWORD.MIN_LENGTH.CODE,
    })
    .max(UserCodes.PASSWORD.MAX_LENGTH.VALUE, {
      message: UserCodes.PASSWORD.MAX_LENGTH.CODE,
    })
    .nonempty({ message: UserCodes.PASSWORD.EMPTY })
    .nonoptional({ message: UserCodes.PASSWORD.UNDEFINED }),
  displayName: z
    .string()
    .nonempty({ message: UserCodes.DISPLAY_NAME.EMPTY })
    .optional(),
});
export type NewUserPayload = z.infer<typeof NewUserSchema>;
