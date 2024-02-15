/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateBloodGroupDto {
@IsNotEmpty()
@IsString()
name: string;
}