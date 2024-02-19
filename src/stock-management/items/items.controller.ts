import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateItemsDto } from './createItems.dto';

@Controller('items')
export class ItemsController {

    @Get()
    async createItems() {
        return 'iteams create success fully'
    }

    @Post()
    testRoute(@Body() createItemsDto: CreateItemsDto) {
        console.log('Received data:', createItemsDto);
        return { message: 'Data received successfully' };
    }

}
