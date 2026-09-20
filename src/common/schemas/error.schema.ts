import { HttpStatus } from "../http-status.js";
import z from "zod";

export const ErrorSchema = z
  .object({
    status: z
      .enum(HttpStatus, {
        error: "Статус помилки має бути http статусом",
      })
      .meta({ description: "Http статус помилки" }),
    message: z
      .string({ error: "Повідомлення помилки має бути рядком" })
      .nonempty({ error: "Повідомлення помилки не може бути порожнім" })
      .meta({ description: "Повідомлення помилки" }),
    errors: z
      .record(z.string(), z.string())
      .optional()
      .meta({ description: "Детальні помилки" }),
  })
  .meta({ id: "ErrorPayload", description: "Данні про помилку" });

export type ErrorPayload = z.infer<typeof ErrorSchema>;
