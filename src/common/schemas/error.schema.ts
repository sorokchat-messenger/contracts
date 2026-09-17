import { HttpStatus } from "@nestjs/common";
import z from "zod";

export const ErrorSchema = z.object({
  status: z.enum(HttpStatus),
  message: z.string(),
});

export type ErrorPayload = z.infer<typeof ErrorSchema>;
