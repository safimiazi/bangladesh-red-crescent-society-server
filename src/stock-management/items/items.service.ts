import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemsTable } from './items.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {

    constructor(
        @InjectRepository(ItemsTable)
        private readonly itemsRepository: Repository<ItemsTable>,
    ) { }

    async addItems(unitData: Partial<ItemsTable>): Promise<ItemsTable> {

        try {
            const items = this.itemsRepository.create(unitData);
            console.log(items);
            const savedaddItems = await this.itemsRepository.save(items);
            return savedaddItems;
        } catch (error) {
            console.error('Error saving user:', error);
            throw error;
        }
    }


    async getAllItems(): Promise<ItemsTable[]> {
        return await this.itemsRepository.find()
    }

}
