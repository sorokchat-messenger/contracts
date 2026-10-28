import z from "zod";
import { NewUserSchema } from "./new-user.schema.js";
import { Role } from "./role.js";
import { UserCodes } from "./codes.js";

export const UserSchema = NewUserSchema.omit({ password: true })
  .required()
  .extend({
    id: z
      .uuidv7({ error: UserCodes.ID.INCORRECT })
      .meta({
        description: "Унікальний ідентифікатор користувача",
        example: "019318b2-3e77-7823-9b21-4f1122334455",
      }),
    role: z.enum(Role, { error: UserCodes.ROLE.INVALID }).meta({
      description: "Роль користувача",
      example: Role.USER,
    }),
  })
  .meta({ id: "UserPayload", description: "Данні користувача" });
export type UserPayload = z.infer<typeof UserSchema>;
