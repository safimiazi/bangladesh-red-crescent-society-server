/* eslint-disable prettier/prettier */


import { IsNotEmpty, IsString, IsEmail, IsOptional, IsBoolean, IsObject } from 'class-validator';

export class CreateUserDto {
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
  isManagingBoardMember?: boolean;

  @IsOptional()
  @IsBoolean()
  isUnitExecutiveCommitteeMember?: boolean;

  @IsOptional()
  @IsBoolean()
  isChairman?: boolean;

  @IsOptional()
  @IsBoolean()
  isMale?: boolean;

  @IsOptional()
  @IsBoolean()
  isFemale?: boolean;

  @IsOptional()
  @IsString()
  selectedMemberType: string;

  @IsOptional()
  @IsString()
  selectedPrefixType: string;

  @IsOptional()
  @IsString()
  selectedUnitType: string;

  @IsOptional()
  @IsString()
  selectedUpazilaType: string;

  @IsOptional()
  @IsString()
  selectedBloodType: string;

  @IsOptional()
  @IsString()
  selectedReligionType: string;


 @IsOptional()
  @IsString({ message: 'Image must be an object' })
  image: string;
}
