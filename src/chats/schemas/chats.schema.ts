import type z from "zod";
import { ShortChatSchema } from "./short-chat.schema.js";

export const ChatsSchema = ShortChatSchema.array()
    .meta({ id: "ChatsPayload", description: "Чати" });

export type ChatsPayload = z.infer<typeof ChatsSchema>;