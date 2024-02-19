import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockinItemsTable } from './stockin-items.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StockinItemsService {

    constructor(
        @InjectRepository(StockinItemsTable)
        private readonly stockinRepository: Repository<StockinItemsTable>
    ) { }

    async addStockinItems(stockinItemsData: Partial<StockinItemsTable>): Promise<StockinItemsTable> {
        try {
            const stockinItem = this.stockinRepository.create(stockinItemsData);
            const savedItemsData = this.stockinRepository.save(stockinItem);
            return savedItemsData;
        } catch (error) {
            console.log('add stockin error', error);
            throw error;
        }
    }

    async getAllStockinItems():Promise<StockinItemsTable[]> {
        return await this.stockinRepository.find();
    }

    /*
    async getAllItem(): Promise<ItemTable[]> {
        return await this.itemRepository.find()
    }
    */ 

}
