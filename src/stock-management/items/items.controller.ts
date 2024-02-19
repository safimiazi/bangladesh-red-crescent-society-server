import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateItemsDto } from './createItems.dto';
import { ItemsService } from './items.service';
import { ItemsTable } from './items.entity';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService){}

    @Post()
    async addItems(@Body() createItemsDto: CreateItemsDto): Promise<{ message: string, items: ItemsTable }> {
        try {
            const items = await this.itemsService.addItems(createItemsDto);
            return { message: 'Unit created successfully', items };
        } catch (error) {
            throw new HttpException({ message: 'An unexpected error occurred.' }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get()
    async getAllItems(): Promise<{ message: string; items: ItemsTable[] }> {
        try {
            const allItems = await this.itemsService.getAllItems()
            return { message: "successfully get the all units", items: allItems }
        } catch (error) {
            console.log(error);
            throw new HttpException({ message: "Unexpected Error occurred" }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

}
