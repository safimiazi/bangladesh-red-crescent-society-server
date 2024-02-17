/* eslint-disable prettier/prettier */


import { IsNotEmpty, IsString, IsEmail, IsOptional, IsBoolean } from 'class-validator';

export class CreateMemberDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  memberIdCard: string;

  @IsNotEmpty()
  enrollmentDate: Date;

  @IsNotEmpty()
  birthDate: Date;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  motherName: string;

  @IsOptional()
  @IsString()
  spouseName?: string;

  @IsNotEmpty()
  @IsString()
  permanentAddress: string;

  @IsOptional()
  @IsString()
  Occupation?: string;

  @IsOptional()
  @IsBoolean()
  isAlive?: boolean;

  @IsOptional()
  @IsBoolean()
  isMale?: boolean;

  @IsOptional()
  @IsBoolean()
  isFemale?: boolean;

  @IsOptional()
  @IsString()
  contactNo: string;

  @IsOptional()
  @IsString()
  emergencyContactNo: string;

  image: string;

}
