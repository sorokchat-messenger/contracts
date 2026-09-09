import { UserCodes } from "./codes.js";
import z from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

export const NewUserSchema = z.object({
  login: z
    .string()
    .nonempty({ message: UserCodes.LOGIN.EMPTY })
    .nonoptional({ message: UserCodes.LOGIN.UNDEFINED })
    .openapi({
      description: "Унікальне ім'я користувача",
      example: "sorokovsky_andrey",
    }),
  password: z
    .string()
    .min(UserCodes.PASSWORD.MIN_LENGTH.VALUE, {
      message: UserCodes.PASSWORD.MIN_LENGTH.CODE,
    })
    .max(UserCodes.PASSWORD.MAX_LENGTH.VALUE, {
      message: UserCodes.PASSWORD.MAX_LENGTH.CODE,
    })
    .nonempty({ message: UserCodes.PASSWORD.EMPTY })
    .nonoptional({ message: UserCodes.PASSWORD.UNDEFINED })
    .openapi({
      description: "Пароль користувача",
      example: "<PASSWORD>",
      minLength: UserCodes.PASSWORD.MIN_LENGTH.VALUE,
      maxLength: UserCodes.PASSWORD.MAX_LENGTH.VALUE,
    }),
  displayName: z
    .string()
    .nonempty({ message: UserCodes.DISPLAY_NAME.EMPTY })
    .optional()
    .openapi({
      description: "Видиме ім'я користувача",
      example: "Сороковський Андрій",
    }),
});
export type NewUserPayload = z.infer<typeof NewUserSchema>;
