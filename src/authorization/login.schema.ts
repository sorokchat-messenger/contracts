import type z from "zod";
import { NewUserSchema } from "../users/index.js";

export const LoginSchema = NewUserSchema.pick({
  login: true,
  password: true,
}).meta({ id: "LoginSchema" });
export type LoginPayload = z.infer<typeof LoginSchema>;
