/* eslint-disable prettier/prettier */


import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMemberType {
    @IsNotEmpty()
    @IsString()
    name: string;
}
