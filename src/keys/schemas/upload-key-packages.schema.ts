import z from "zod";
import { NewIdentityKeySchema } from "./new-identity-key.schema.js";
import { KeyPackageSchema } from "./key-package.schema.js";

export const UploadKeyPackagesSchema = z.object({
    identityKey: NewIdentityKeySchema.shape.identityKey,
    packages: KeyPackageSchema.pick({
        initKey: true,
        isLastResort: true,
        signature: true
    }).array()
}).meta({
    id: "UploadKeyPackages",
    description: "Нові пакети ключів"
});

export type UploadKeyPackagesPayload = z.infer<typeof UploadKeyPackagesSchema>;