import type z from "zod";
import { NewChatSchema } from "./new-chat.schema.js";

export const UpdateChatSchema = NewChatSchema.partial()
    .meta({ id: "UpdateChatPayload", description: "Данні для оновлення чату" });
export type UpdateChatPayload = z.infer<typeof UpdateChatSchema>;