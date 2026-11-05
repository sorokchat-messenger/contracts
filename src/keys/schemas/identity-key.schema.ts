import z from "zod";
import { KEYS_CODES } from "../codes.js";
import { UserSchema } from "../../users/index.js";

export const IdentityKeySchema = z.object({
    createdAt: z.coerce.date().meta({
        description: "Дата реєстрації публічного ключа",
        example: "2026-11-05T20:00:00.000Z"
    }),
    identityKey: z
        .hex({ error: KEYS_CODES.KEY.INCORRECT })
        .length(64, { error: KEYS_CODES.KEY.INCORRECT })
        .meta({
            description: "Публічний ключ",
        }),
    id: z
        .uuidv7({ error: KEYS_CODES.ID.INCORRECT })
        .meta({
            example: "019318b2-3e77-7823-9b21-4f1122334455",
            description: "Унікальний ідентифікатор публічного ключа"
        }),
    userId: UserSchema.shape.id
}).meta({
    id: "IdentityKeySchema",
    description: "Публічний ідентифікаційний ключ"
});

export type IdentityKeyPayload = z.infer<typeof IdentityKeySchema>;