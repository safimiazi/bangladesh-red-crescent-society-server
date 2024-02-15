/* eslint-disable prettier/prettier */


import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReligionDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
