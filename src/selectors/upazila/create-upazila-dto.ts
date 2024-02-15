/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateUpazilaDto {
@IsNotEmpty()
@IsString()
name: string;
}