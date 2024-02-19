import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WareHouseTable } from './warehouse.entity';

@Injectable()
export class WarehouseService {

    constructor(
        @InjectRepository(WareHouseTable)
        private readonly wareHouseRepository: Repository<WareHouseTable>
    ) { }

    async addWareHouse(warehouseData: Partial<WareHouseTable>): Promise<WareHouseTable> {
        try {
            const warehouse = this.wareHouseRepository.create(warehouseData);
            const savedWarehouse = await this.wareHouseRepository.save(warehouse);
            return savedWarehouse;
        } catch (error) {
            console.log('Error saving warehouse', error);
            throw error;
        }
    }

    async getAllWareHouse(): Promise<WareHouseTable[]> {
        return await this.wareHouseRepository.find();
    }

    /*
    constructor(
        @InjectRepository(ItemTable)
        private readonly itemRepository: Repository<ItemTable>
    ) { }

    async createItem(itemData: Partial<ItemTable>): Promise<ItemTable> {

        try {
            const item = this.itemRepository.create(itemData);
            console.log(item);
            const savedItem = await this.itemRepository.save(item);
            return savedItem;
        } catch (error) {
            console.error('Error saving user:', error);
            throw error;
        }
    }

    */

}
