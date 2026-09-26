import { NewChatSchema } from "./new-chat.schema.js";
import { ChatsCodes } from "../codes.js";
import z from "zod";

export const ChatSchema = NewChatSchema.extend({
    id: z
        .int({ error: ChatsCodes.ID.NOT_INTEGER })
        .positive({ error: ChatsCodes.ID.NOT_POSITIVE })
        .meta({
            description: "Унікальний ідентифікатор чату",
            example: 1,
        }),
}).meta({ id: "ChatPayload", description: "Повна інформація про чат" });
export type ChatPayload = z.infer<typeof ChatSchema>;