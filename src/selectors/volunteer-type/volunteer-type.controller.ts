/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';

import { VolunteerTypeService } from './volunteer-type.service';
import { CreateVolunteerTypeDto } from './create-volunteer.dto';
import { VolunteerTypeTable } from './volunteer-type-entity';

@Controller('volunteer-type')
export class VolunteerTypeController {

  constructor(private readonly volunteerTypeService : VolunteerTypeService) { }

  @Post()
  async createVolunteerType(@Body() createVolunteerTypeDto : CreateVolunteerTypeDto) : Promise<{message: string, volunteers: VolunteerTypeTable}> {
    try {
      const volunteers = await this.volunteerTypeService.createVolunteerType(createVolunteerTypeDto);
    return {message : "Volunteers created successfully", volunteers}
    } catch (error) {
      throw new HttpException({ message: 'An unexpected error occurred.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  @Get()

  async getAllVolunteer(): Promise<{message: string; volunteers: VolunteerTypeTable[] }> {
    try {
      const volunteers = await this.volunteerTypeService.getAllVolunteer();
      return {message: "Successfully retrieved all volunteers", volunteers}
    } catch (error) {
      console.log(error);
      throw new HttpException({message: "An unexpected error occurred"}, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

}
