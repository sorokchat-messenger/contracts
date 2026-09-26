import z from "zod";
import { ChatSchema } from "./chat.schema.js";

export const ShortChatSchema = ChatSchema
    .pick({ id: true, name: true })
    .meta({ id: "ShortChatPayload", description: "Коротка інформація про чат" });

export type ShortChatPayload = z.infer<typeof ShortChatSchema>;