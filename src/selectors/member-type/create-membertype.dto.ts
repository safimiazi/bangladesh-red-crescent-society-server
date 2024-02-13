/* eslint-disable prettier/prettier */


import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMemberTypeDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
