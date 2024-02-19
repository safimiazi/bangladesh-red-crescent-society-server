import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { StockinItemsService } from './stockin-items.service';
import { CreateStockinItemsDto } from './stockin-items.dto';
import { StockinItemsTable } from './stockin-items.entity';

@Controller('stockin-items')
export class StockinItemsController {

    constructor(private readonly stockinItemsService: StockinItemsService) { }
    
    @Post()
    async addStockinItems(@Body() createStockinItemsDto:CreateStockinItemsDto): Promise<{message: string, stockinItems: StockinItemsTable}> {
        try {
            const stockinItems = await this.stockinItemsService.addStockinItems(createStockinItemsDto);
            return { message: 'Stockin items added successfully', stockinItems };
        } catch (error) {
            throw new HttpException({ message: 'Some error happend' }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get()
    async getAllStockinItems(): Promise<{ message: string, stockinItems: StockinItemsTable[] }>{
        try {
            const allStockinItems = await this.stockinItemsService.getAllStockinItems();
            return { message: 'all items get', stockinItems:allStockinItems }
        } catch (error) {
            
        }
    }
}
