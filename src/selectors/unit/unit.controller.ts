/* eslint-disable @typescript-eslint/no-unused-vars */
import { CreateUnitDto } from './create-unit-dto';
import { Unit } from './unit.entity';
import { UnitService } from './unit.service';
/* eslint-disable prettier/prettier */
import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';

@Controller('unit')
export class UnitController {
    constructor(private readonly unitService: UnitService) {}

    
  @Post()
  async createUnit(@Body() createUnitDto: CreateUnitDto): Promise<{ message: string, unit: Unit }> {
    try {
      const unit = await this.unitService.createUnit(createUnitDto);
      return { message: 'User created successfully', unit };
    } catch (error) {
      throw new HttpException({ message: 'An unexpected error occurred.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
