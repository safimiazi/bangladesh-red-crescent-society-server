import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockinMainTable } from './stockin-items-main.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StockinItemsMainService {

    constructor(
        @InjectRepository(StockinMainTable)
        private readonly stockinRepository: Repository<StockinMainTable>
    ) {}

    async addStockinItems(stockinItem: Partial<StockinMainTable>): Promise<StockinMainTable> {
        try {
            const data = this.stockinRepository.create(stockinItem);
            const stockinData = await this.stockinRepository.save(data)
            return stockinData;
        } catch (error) {
            console.log(error);
        }
    }

    async getAllStockItems(): Promise<StockinMainTable[]> {
        return await this.stockinRepository.find({ relations: ["stockinItemsTable", "wareHouseTable"]})
    }
}
