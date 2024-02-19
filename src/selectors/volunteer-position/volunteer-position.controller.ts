import { CreateVolunteerTypeDto } from './create-volunteer-position.dto';
import { VolunteerPositionTable } from './volunteer-position.entity';
import { VolunteerPositionService } from './volunteer-position.service';
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';

@Controller('volunteer-position')
export class VolunteerPositionController {
    constructor(private readonly volunteerPositionService: VolunteerPositionService) { }

    @Post()
    async createVolunteerPositionType(@Body() createVolunteerTypeDto: CreateVolunteerTypeDto): Promise<{ message: string, volunteerPositions: VolunteerPositionTable }> {
        try {
            const volunteerPositions = await this.volunteerPositionService.createVolunteerPositionType(createVolunteerTypeDto)
            return { message: "volunteer positions created successfully", volunteerPositions }
        } catch (error) {
            throw new HttpException({ message: "An unexpected error occorred." }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


@Get()
async getAllVolunteerPosition(): Promise<{message: string; volunteerPosition : VolunteerPositionTable[] }> {
    try {
        const allVolunteerPosition = await this.volunteerPositionService.getAllVolunteerPosition()
        return {message: "Successfully get all Religion types", volunteerPosition: allVolunteerPosition}

    } catch (error) {
        throw new HttpException({message: "Un expected error occurred"}, HttpStatus.INTERNAL_SERVER_ERROR)
    }
}

}
