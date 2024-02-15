/* eslint-disable prettier/prettier */
import { BloodGroupTable } from './blood-group.entity';
import { BloodGroupService } from './blood-group.service';

import { Body, Controller, HttpException, Post, HttpStatus, Get } from '@nestjs/common';
import { CreateBloodGroupDto } from './create-bloodGroup-dto';

@Controller('blood-group')
export class BloodGroupController {
    constructor(private readonly bloodGroupService: BloodGroupService) { }

    @Post()
    async createBloodGroup(@Body() createBloodGroupDto: CreateBloodGroupDto): Promise<{ message: string; bloodGroupTable: BloodGroupTable }> {
        try {
            const bloodGroup = await this.bloodGroupService.createBloodGroup(createBloodGroupDto);
            console.log(bloodGroup);
            return { message: "BloodGroup created successfully", bloodGroupTable: bloodGroup };
        } catch (error) {
            console.log(error);
            throw new HttpException({ message: "An unexpected error occurred." }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }


    @Get()
    async getAllBloodGroup(): Promise<{ message: string; bloodGroup: BloodGroupTable[] }> {
        try {
            const allBloodGroup = await this.bloodGroupService.getAllBloodGroup()
            return { message: "successfully get the all bloodGroup", bloodGroup: allBloodGroup }
        } catch (error) {
            console.log(error);
            throw new HttpException({ message: "Unexpected error occurred" }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
