/* eslint-disable prettier/prettier */
import { IsBoolean } from "class-validator";

export class CreateMemberRoleDto {
    @IsBoolean()
    managingBoard: boolean;

    @IsBoolean()
    unitExecutive: boolean;

    @IsBoolean()
    chairman: boolean;
}