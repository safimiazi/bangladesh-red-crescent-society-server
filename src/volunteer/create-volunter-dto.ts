/* eslint-disable prettier/prettier */


import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateVolunteerDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    volunteerType: string;

    @IsNotEmpty()
    @IsNumber()
    volunteerId: number;

    @IsNotEmpty()
    @IsString()
    volunteerPosition: string;

    @IsOptional()
    @IsBoolean()
    isMale?: boolean;

    @IsOptional()
    @IsBoolean()
    isFemale?: boolean;

    @IsOptional()
    @IsBoolean()
    ismarried?: boolean;

    @IsOptional()
    @IsBoolean()
    isunmarried?: boolean;

    @IsOptional()
    @IsString()
    registrationNo: string;

    @IsOptional()
    @IsNumber()
    nationalId: number;

    @IsOptional()
    @IsString()
    education: string;

    @IsOptional()
    @IsDate()
    dob: Date;

    @IsOptional()
    @IsDate()
    joiningDate: Date;

    @IsOptional()
    @IsNumber()
    mobileNo: string;

    @IsOptional()
    @IsNumber()
    emergencyContactNo: number;

    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    fathersName: string;

    @IsOptional()
    @IsString()
    mothersName: string;

    @IsOptional()
    @IsNumber()
    birthCertificateNo: number;

    @IsOptional()
    @IsNumber()
    passportNo: number;

    @IsOptional()
    @IsString()
    presentOccupation: string;

    @IsOptional()
    @IsString()
    adress: string;

    @IsOptional()
    @IsString()
    insurance: string;

    @IsOptional()
    @IsString()
    twitter: string;

    @IsOptional()
    @IsString()
    facebook: string;

    @IsOptional()
    @IsString()
    resourceType: string;

    @IsOptional()
    @IsString()
    image: string;
}
