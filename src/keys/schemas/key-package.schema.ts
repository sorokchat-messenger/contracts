import z from "zod";
import { KEYS_CODES } from "../codes.js";
import { IdentityKeySchema } from "./identity-key.schema.js";
import { UserSchema } from "../../users/user.schema.js";

export const KeyPackageSchema = z.object({
    id: z.uuidv7({ error: KEYS_CODES.ID.INCORRECT }).meta({
        description: "Унікальний ідентифікатор пакету ключів"
    }),
    createdAt: z.coerce.date().meta({
        description: "Дата створення пакету",
        example: "2026-11-05T20:00:00.000Z"
    }),
    identityKey: IdentityKeySchema.shape.identityKey,
    initKey: z.hex({ error: KEYS_CODES.KEY.INCORRECT })
        .length(64, { error: KEYS_CODES.KEY.INCORRECT })
        .meta({
            description: "Ключ ініціалізації HPKE / X25519 (64 Hex-символи / 32 байти)"
        }),
    userId: UserSchema.shape.id,
    isLastResort: z.boolean().meta({
        description: "Прапорець Fallback-ключа (Last Resort)",
        example: false
    }),
    signature: z
        .hex({ error: KEYS_CODES.SIGNATURE.INCORRECT })
        .length(128, { error: KEYS_CODES.SIGNATURE.INCORRECT })
        .meta({ description: "Підпис Ed25519 для перевірки цілісності initKey (128 Hex-символів / 64 байти)" })
})
    .meta({
        id: "KeyPackage",
        description: "Пакет ключів для створення сесійного ключа"
    });

export type KeyPackagePayload = z.infer<typeof KeyPackageSchema>;