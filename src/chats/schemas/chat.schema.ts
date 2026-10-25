import { NewChatSchema } from "./new-chat.schema.js";
import { ChatsCodes } from "../codes.js";
import z from "zod";

export const ChatSchema = NewChatSchema.extend({
    id: z
        .uuidv7({ error: ChatsCodes.ID.INCORRECT })
        .meta({
            description: "Унікальний ідентифікатор чату",
            example: 1,
        }),
}).meta({ id: "ChatPayload", description: "Повна інформація про чат" });
export type ChatPayload = z.infer<typeof ChatSchema>;