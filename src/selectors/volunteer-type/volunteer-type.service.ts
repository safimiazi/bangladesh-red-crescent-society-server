/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VolunteerTypeTable } from './volunteer-type-entity';
import { Repository } from 'typeorm';

@Injectable()
export class VolunteerTypeService {

    constructor(
        @InjectRepository(VolunteerTypeTable)
        private readonly volunteerTypeRepository: Repository<VolunteerTypeTable>,
    ) { }

    async createVolunteerType(volunteerTypeData: Partial<VolunteerTypeTable>): Promise<VolunteerTypeTable> {

        try {
            const volunteerType = this.volunteerTypeRepository.create(volunteerTypeData);
            console.log(volunteerType);
            const savedVolunteerType = await this.volunteerTypeRepository.save(volunteerType);
            return savedVolunteerType;
        } catch (error) {
            console.error('Error saving user:', error);
            throw error;
        }
    }

    async getAllVolunteer() {
        return await this.volunteerTypeRepository.find()
    }

 
}
