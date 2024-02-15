/* eslint-disable prettier/prettier */
import { UpazilaService } from './upazila.service'; // Correct import path
import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateUpazilaDto } from './create-upazila-dto';
import { UpazilaTable } from './upazila.entity';

@Controller('upazila')
export class UpazilaController {

    constructor(private readonly upazilaService: UpazilaService) {}

    @Post()
    async createUpazila(@Body() createUpazilaDto: CreateUpazilaDto): Promise<{ message: string; upazilaTable: UpazilaTable }> {
        try {
            const upazila = await this.upazilaService.createUpazila(createUpazilaDto);
            console.log(upazila);
            return { message: 'Upazila created successfully', upazilaTable: upazila };
        } catch (error) {
            console.log(error);
            throw new HttpException({ message: 'An unexpected error occurred.' }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get()
    async getAllUpazila(): Promise<{message: string; upazila: UpazilaTable[]}> {
        try {
            const allUpazila = await this.upazilaService.getAllUpazila()
            return {message: "Successfully get the all upazila", upazila: allUpazila}
        } catch (error) {
          console.log(error);
          throw new HttpException({message: "Unexpected Error Occurred"}, HttpStatus.INTERNAL_SERVER_ERROR)  
        }
    }
}
