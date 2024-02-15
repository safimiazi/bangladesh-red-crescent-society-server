/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpazilaTable } from './upazila.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UpazilaService {
    constructor(
        @InjectRepository(UpazilaTable)
        private readonly upazilaRepository: Repository<UpazilaTable>,
    ) { }

    async createUpazila(upazilaData: Partial<UpazilaTable>): Promise<UpazilaTable> {
        try {
            const upazila = this.upazilaRepository.create(upazilaData);
            console.log(upazila);
            const savedUpazila = await this.upazilaRepository.save(upazila);
            return savedUpazila;
        } catch (error) {
            console.error('Error saving upazila', error);
            throw error;
        }
    }


    async getAllUpazila(): Promise<UpazilaTable[]> {
        return await this.upazilaRepository.find()
    }
}
