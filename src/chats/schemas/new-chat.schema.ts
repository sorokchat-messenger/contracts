import z from "zod";
import { ChatsCodes } from "../codes.js";

export const NewChatSchema = z.object({
    name: z
        .string({ error: ChatsCodes.NAME.UNDEFINED })
        .nonempty({ error: ChatsCodes.NAME.EMPTY })
        .meta({ description: "Назва чату", example: "Крутий чат" }),
    description: z
        .string()
        .nonempty({ error: ChatsCodes.DESCRIPTION.EMPTY })
        .optional()
        .meta({ description: "Опис чату", example: "Дуже крутий чат" })
})
    .meta({ id: "NewChatPayload", description: "Дані для створення чату" });

export type NewChatPayload = z.infer<typeof NewChatSchema>;