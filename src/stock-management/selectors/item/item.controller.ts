import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
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
    /*
   @Post()
 async createUnit(@Body() createUnitDto: CreateUnitDto): Promise<{ message: string, unit: Unit }> {
   try {
     const unit = await this.unitService.createUnit(createUnitDto);
     return { message: 'Unit created successfully', unit };
   } catch (error) {
     throw new HttpException({ message: 'An unexpected error occurred.' }, HttpStatus.INTERNAL_SERVER_ERROR);
   }
   */

}
