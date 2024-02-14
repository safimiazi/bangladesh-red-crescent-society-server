/* eslint-disable prettier/prettier */
import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { PrefixService } from './prefix.service';
import { CreatePrefixDto } from './create-prefix.dto';
import { Prefix } from './prefix.entity';

@Controller('prefix')
export class PrefixController {
    constructor(private readonly prefixService: PrefixService) {}

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
}
