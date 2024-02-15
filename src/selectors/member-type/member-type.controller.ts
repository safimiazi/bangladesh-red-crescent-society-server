/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { MemberTypeService } from './member-type.service';
import { MemberType } from './member-type.entity';
import { CreateMemberTypeDto } from './create-membertype.dto';

@Controller('member-type')
export class MemberTypeController {
    constructor(private readonly memberTypeService: MemberTypeService) { }

    @Post()
    async createMemberType(@Body() createMemberTypeDto: CreateMemberTypeDto): Promise<{ message: string, members: MemberType }> {
        try {
            const members = await this.memberTypeService.createMemberType(createMemberTypeDto);
            return { message: 'User created successfully', members };
        } catch (error) {
            throw new HttpException({ message: 'An unexpected error occurred.' }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Get()
    async getAllMemberTypes(): Promise<{ message: string; memberTypes: MemberType[] }> {
      try {
        const memberTypes = await this.memberTypeService.getAllMemberTypes();
        return { message: 'Successfully retrieved all member types', memberTypes };
      } catch (error) {
        console.error(error);
        throw new HttpException(
          { message: 'An unexpected error occurred.' },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }


}
