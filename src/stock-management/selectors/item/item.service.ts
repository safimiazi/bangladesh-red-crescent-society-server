import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemTable } from './item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemService {

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

    async getAllItem(): Promise<ItemTable[]> {
        return await this.itemRepository.find()
    }

}