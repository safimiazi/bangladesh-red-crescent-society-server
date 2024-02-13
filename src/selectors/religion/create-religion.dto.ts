/* eslint-disable prettier/prettier */


import { IsNotEmpty, IsString } from 'class-validator';

export class createReligionDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
