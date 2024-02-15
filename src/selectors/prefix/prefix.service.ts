/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prefix } from './prefix.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrefixService {
    constructor(
        @InjectRepository(Prefix)
        private readonly prefixRepository: Repository<Prefix>,
    ) {}

    async createPrefix(prefixType: Partial<Prefix>): Promise<Prefix> {
        try {
            const prefix = this.prefixRepository.create(prefixType);
            console.log(prefix);
            const savePrefix = await this.prefixRepository.save(prefix);
            return savePrefix;
        } catch (error) {
            console.error('Error saving prefix:', error.message || error);
            // You can handle the error differently, log it, or throw a custom exception.
            throw new Error('Failed to create prefix');
        }
    }

   

    async getPrefixType() : Promise<Prefix[]> {
        return await this.prefixRepository.find()
    }
}
