/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

export class CreateMemberRoleDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}