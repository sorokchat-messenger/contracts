import { UserCodes } from "./codes.js";
import z from "zod";

export const NewUserSchema = z
  .object({
    login: z
      .string({ message: UserCodes.LOGIN.UNDEFINED })
      .nonempty({ message: UserCodes.LOGIN.EMPTY })
      .meta({
        example: "andrey_sorokovsky",
        description: "Унікальне ім'я користувача",
      }),
    password: z
      .string({ message: UserCodes.PASSWORD.UNDEFINED })
      .min(UserCodes.PASSWORD.MIN_LENGTH.VALUE, {
        message: UserCodes.PASSWORD.MIN_LENGTH.CODE,
      })
      .max(UserCodes.PASSWORD.MAX_LENGTH.VALUE, {
        message: UserCodes.PASSWORD.MAX_LENGTH.CODE,
      })
      .nonempty({ message: UserCodes.PASSWORD.EMPTY })
      .meta({ example: "<PASSWORD>", description: "Пароль користувача" }),
    displayName: z
      .string({ message: UserCodes.DISPLAY_NAME.EMPTY })
      .nonempty({ message: UserCodes.DISPLAY_NAME.EMPTY })
      .optional()
      .meta({
        example: "Сороковський Андрій",
        description: "Видиме ім'я користувача",
      }),
  })
  .meta({ id: "NewUserPayload", description: "Данні нового користувача" });
export type NewUserPayload = z.infer<typeof NewUserSchema>;
