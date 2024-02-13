/* eslint-disable prettier/prettier */
// create-member-profile.dto.ts
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateDropmenuDto {
    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    prefix: string[];

    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    memberType: string[];

    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    unit: string[];

    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    affiliatedUpazila: string[];

    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    bloodGroup: string[];

    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    religion: string[];
}
