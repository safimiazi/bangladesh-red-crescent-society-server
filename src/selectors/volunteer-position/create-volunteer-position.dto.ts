/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

export class CreateVolunteerTypeDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}