/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional } from 'class-validator';
export class CreatePrefixDto {
    @IsNotEmpty()
    @IsOptional()
    name: string
}