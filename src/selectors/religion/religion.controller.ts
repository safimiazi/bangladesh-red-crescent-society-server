/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { ReligionService } from './religion.service';
import { CreateReligionDto } from './create-religion.dto';
import { Religion } from './religion.entity';

@Controller('religion')
export class ReligionController {

    constructor(private readonly religionService: ReligionService){}

    @Post()
    async createReligion(@Body() createReligionDto: CreateReligionDto): Promise<{ message: string, religion: Religion }> {
        try {
            const religion = await this.religionService.createReligion(createReligionDto);
            return { message: 'User created successfully', religion };
        } catch (error) {
            throw new HttpException({ message: 'An unexpected error occurred.' }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

@Get()
async getAllReligion():Promise<{message: string; religionType: Religion[] }> {
    try {
        const allReligion = await this.religionService.getAllReligion();
        return {message: "Successfully get all Religion types", religionType: allReligion}
    } catch (error) {
        throw new HttpException({message: "Un expected error occurred"}, HttpStatus.INTERNAL_SERVER_ERROR)
    }
}

}
