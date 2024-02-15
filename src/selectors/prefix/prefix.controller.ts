/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { PrefixService } from './prefix.service';
import { CreatePrefixDto } from './create-prefix.dto';
import { Prefix } from './prefix.entity';

@Controller('prefix')
export class PrefixController {
    constructor(private readonly prefixService: PrefixService) { }

    @Post()
    async createPrefix(@Body() createPrefixDto: CreatePrefixDto): Promise<{ message: string; prefix: Prefix }> {
        try {
            const prefix = await this.prefixService.createPrefix(createPrefixDto);
            return { message: 'Prefix created successfully', prefix };
        } catch (error) {
            throw new HttpException(
                { message: 'An unexpected error occurred.' },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    @Get()
  async getPrefixType(): Promise<{ message: string; prefixType: Prefix[] }> {
    try {
      const prefixTypes = await this.prefixService.getPrefixType();
      return { message: 'Successfully retrieved all prefix types', prefixType: prefixTypes };
    } catch (error) {
      console.error(error);
      throw new HttpException({ message: 'An unexpected error occurred' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


}
