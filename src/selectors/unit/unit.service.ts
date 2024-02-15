/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Unit } from './unit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UnitService {
    constructor(
        @InjectRepository(Unit)
        private readonly unitRepository: Repository<Unit>,
    ) { }

    async createUnit(unitData: Partial<Unit>): Promise<Unit> {

        try {
            const unit = this.unitRepository.create(unitData);
            console.log(unit);
            const savedUnit = await this.unitRepository.save(unit);
            return savedUnit;
        } catch (error) {
            console.error('Error saving user:', error);
            throw error;
        }
    }


    async getAllUnit(): Promise<Unit[]> {
        return await this.unitRepository.find()
    }
}
