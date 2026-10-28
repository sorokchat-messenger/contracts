import { NewChatSchema } from "./new-chat.schema.js";
import { ChatsCodes } from "../codes.js";
import z from "zod";

export const ChatSchema = NewChatSchema.extend({
    id: z
        .uuidv7({ error: ChatsCodes.ID.INCORRECT })
        .meta({
            description: "Унікальний ідентифікатор чату",
            example: "019318b2-3e77-7823-9b21-4f1122334455",
        }),
}).meta({ id: "ChatPayload", description: "Повна інформація про чат" });
export type ChatPayload = z.infer<typeof ChatSchema>;