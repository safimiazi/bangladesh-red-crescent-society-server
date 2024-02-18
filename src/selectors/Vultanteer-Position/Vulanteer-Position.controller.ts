/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { VulanteerPositionService } from './Vultanteer-Position.service';
import { CreateVulanteerPositionDto } from './create-VulanteerPosition.dto';
import { VulanteerPosition } from './Vultanteer-Position.entity';


@Controller('vulanteer-position')
export class VulanteerPositionController {
    constructor(private readonly memberTypeService: VulanteerPositionService) { }

    @Post()
    async createVulanteerPosition(@Body() createVulanteerPositionDto: CreateVulanteerPositionDto): Promise<{ message: string, members: MemberType }> {
        try {
            const vulanteer = await this.memberTypeService.createVulanteerPosition(createVulanteerPositionDto);
            return { message: 'User created successfully', vulanteer };
        } catch (error) {
            throw new HttpException({ message: 'An unexpected error occurred.' }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Get()
    async getAllVulanteerPosition(): Promise<{ message: string; memberTypes: VulanteerPosition[] }> {
      try {
        const vulanteer = await this.memberTypeService.getAllVulanteerPosition();
        return { message: 'Successfully retrieved all member types', vulanteer };
      } catch (error) {
        console.error(error);
        throw new HttpException(
          { message: 'An unexpected error occurred.' },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }


}
