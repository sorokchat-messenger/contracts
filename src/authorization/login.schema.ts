import type z from "zod";
import { NewUserSchema } from "../users/index.js";

export const LoginSchema = NewUserSchema.pick({
  login: true,
  password: true,
});
export type LoginPayload = z.infer<typeof LoginSchema>;
