/* eslint-disable prettier/prettier */
import { CreateUnitDto } from './create-unit-dto';
import { Unit } from './unit.entity';
import { UnitService } from './unit.service';
import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';

@Controller('unit')
export class UnitController {
  constructor(private readonly unitService: UnitService) { }


  @Post()
  async createUnit(@Body() createUnitDto: CreateUnitDto): Promise<{ message: string, unit: Unit }> {
    try {
      const unit = await this.unitService.createUnit(createUnitDto);
      return { message: 'Unit created successfully', unit };
    } catch (error) {
      throw new HttpException({ message: 'An unexpected error occurred.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async getAllUnit(): Promise<{ message: string; uitType: Unit[] }> {
    try {
      const allUnit = await this.unitService.getAllUnit()
      return { message: "successfully get the all units", uitType: allUnit }
    } catch (error) {
      console.log(error);
      throw new HttpException({ message: "Unexpected Error occurred" }, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }




}
