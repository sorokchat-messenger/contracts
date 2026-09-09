import type z from "zod";
import { NewUserSchema } from "../users/index.js";

export const RegisterSchema = NewUserSchema.pick({
  login: true,
  password: true,
  displayName: true,
});
export type RegisterPayload = z.infer<typeof RegisterSchema>;
