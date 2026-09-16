import type z from "zod";
import { NewUserSchema } from "../users/index.js";

export const LoginSchema = NewUserSchema.pick({
  login: true,
  password: true,
}).meta({
  id: "LoginSchema",
  description: "Данні для входу користувача у систему",
});
export type LoginPayload = z.infer<typeof LoginSchema>;
