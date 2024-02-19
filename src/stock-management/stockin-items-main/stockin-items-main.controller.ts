import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateStockinMianDto } from './create-stockin-main.dto';
import { StockinMainTable } from './stockin-items-main.entity';
import { StockinItemsMainService } from './stockin-items-main.service';

@Controller('stockin-items-main')
export class StockinItemsMainController {

    constructor(private readonly stockinItemsMainService: StockinItemsMainService) { }

    @Post()
    async addStockinItems(@Body() createStockinMianDto: CreateStockinMianDto): Promise<{ message: string, stockinItems: StockinMainTable }> {
        try {
            const item = await this.stockinItemsMainService.addStockinItems(createStockinMianDto);
            return { message: 'added successfully', stockinItems: item };
        } catch (error) {
            throw new HttpException({ message: 'error in controller' }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get()
    async getAllStockItems(): Promise<{ message: string, stockinItems: StockinMainTable[] }> {
        try {
            const stockinItems = await this.stockinItemsMainService.getAllStockItems();
            return { message: 'successfull', stockinItems: stockinItems };
        } catch (error) {
            console.log(error);
        }
    }
}
