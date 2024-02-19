import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateItemDto } from './create-item.dto';
import { ItemService } from './item.service';
import { ItemTable } from './item.entity';

@Controller('item')
export class ItemController {

    constructor(private readonly itemService: ItemService) { }

    @Post()
    async createItem(@Body() createItemDto: CreateItemDto): Promise<{ message: string, item: ItemTable }> {
        try {
            const item = await this.itemService.createItem(createItemDto);
            return { message: 'Unit created successfully', item };
        } catch (error) {
            throw new HttpException({ message: 'An unexpected error occurred.' }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
  }
  
  @Get()
  async getAllItem(): Promise<{ message: string; item: ItemTable[] }> {
    try {
      const allItem = await this.itemService.getAllItem()
      return { message: "successfully get the all units", item: allItem }
    } catch (error) {
      console.log(error);
      throw new HttpException({ message: "Unexpected Error occurred" }, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

}
