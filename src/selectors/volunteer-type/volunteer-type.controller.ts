import { Body, Controller, Get, HttpException, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { VolunteerTypeService } from './volunteer-type.service';
import { CreateVolunteerTypeDto } from './create-volunteer.dto';
import { VolunteerTypeTable } from './volunteer-type-entity';

@Controller('volunteer-type')
export class VolunteerTypeController {

    constructor(private readonly volunteerTypeService: VolunteerTypeService) { }

    // @Get()
    // async getHello() {
    //     return 'Hello World'
    // }

    @Post()
    async createVolunteerType(@Body() createVolunteerTypeDto: CreateVolunteerTypeDto): Promise<{ message: string, volunteerTypeTable: VolunteerTypeTable }> {
        try {
            const volunteerTypeTable = await this.volunteerTypeService.createVolunteerType(createVolunteerTypeDto);
            return { message: 'Unit created successfully', volunteerTypeTable };
        } catch (error) {
            throw new HttpException({ message: 'An unexpected error occurred.' }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    /*
    @Post()
  async createUnit(@Body() createUnitDto: CreateUnitDto): Promise<{ message: string, unit: Unit }> {
    try {
      const unit = await this.unitService.createUnit(createUnitDto);
      return { message: 'Unit created successfully', unit };
    } catch (error) {
      throw new HttpException({ message: 'An unexpected error occurred.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    */
}
