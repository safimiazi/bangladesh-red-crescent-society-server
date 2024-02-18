/* eslint-disable prettier/prettier */


import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVulanteerPositionDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
