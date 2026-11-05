import z from "zod";
import { IdentityKeySchema } from "./identity-key.schema.js";

export const NewIdentityKeySchema = IdentityKeySchema.pick({
    identityKey: true
}).meta({
    id: "NewIdentityKey",
    description: "Новий публічний ідентифікаційний ключ"
});

export type NewIdentityKeyPayload = z.infer<typeof NewIdentityKeySchema>;