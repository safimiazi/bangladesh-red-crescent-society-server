import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { CreateWareHouseDto } from './warehouse.dto';
import { WareHouseTable } from './warehouse.entity';
import { create } from 'domain';

@Controller('warehouse')
export class WarehouseController {

    constructor(private readonly warehouseService: WarehouseService) { }
    
    @Post()
    async addWareHouse(@Body() createWareHouseDto: CreateWareHouseDto): Promise<{ message: string, warehouse: WareHouseTable }>{
        
        try {
            const warehouse = await this.warehouseService.addWareHouse(createWareHouseDto);
            return { message: 'warehouse added successfully', warehouse }
        } catch (error) {
            throw new HttpException({ message: 'An unexpected error' }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get()
    async getAllWareHouse():Promise<{message: string, warehouse: WareHouseTable[]}> {
        try {
            const wareHouse = await this.warehouseService.getAllWareHouse();
            return {message:'successfull', warehouse:wareHouse};
        } catch (error) {
            console.log('error detect in warehouse getting from controller', error);
            throw error;
        }
    }
}
