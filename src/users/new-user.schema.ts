import { IsDefined, IsNotEmpty, IsString } from "class-validator";
import { classToZod, z } from "@hiscojs/zodify";
import { UserCodes } from "./codes.js";

export class NewUserDto {
  @IsString()
  @IsDefined({ message: UserCodes.LOGIN.UNDEFINED })
  @IsNotEmpty({ message: UserCodes.LOGIN.EMPTY })
  public login!: string;

  @IsString()
  @IsDefined({ message: UserCodes.PASSWORD.UNDEFINED })
  @IsNotEmpty({ message: UserCodes.PASSWORD.EMPTY })
  public password!: string;

  public displayName?: string;
}

type InferZodSchema<T extends z.ZodType> = z.infer<T>;

export const NewUserSchema = classToZod(NewUserDto);
export type NewUserPayload = InferZodSchema<typeof NewUserSchema>;
