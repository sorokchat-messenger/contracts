import z from "zod";
import { NewUserSchema } from "./new-user.schema.js";
import { Role } from "./role.js";
import { UserCodes } from "./codes.js";

export const UserSchema = NewUserSchema.omit({ password: true })
  .required()
  .extend({
    id: z
      .int({ error: UserCodes.ID.NOT_INTEGER })
      .positive({ error: UserCodes.ID.NOT_POSITIVE })
      .meta({
        description: "Унікальний ідентифікатор користувача",
        example: 1,
      }),
    role: z.enum(Role, { error: UserCodes.ROLE.INVALID }).meta({
      description: "Роль користувача",
      example: Role.USER,
    }),
  })
  .meta({ id: "UserPayload", description: "Данні користувача" });
export type UserPayload = z.infer<typeof UserSchema>;
