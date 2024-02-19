/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VolunteerPositionTable } from './volunteer-position.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VolunteerPositionService {
    constructor(@InjectRepository(VolunteerPositionTable) private readonly volunteerPositionTypeRepository: Repository<VolunteerPositionTable>) { }

    async createVolunteerPositionType(volunteerPositionTypeData: Partial<VolunteerPositionTable>): Promise<VolunteerPositionTable> {
        try {
            const volunteers = this.volunteerPositionTypeRepository.create(volunteerPositionTypeData);
            console.log(volunteers);
            const savedVolunteers = await this.volunteerPositionTypeRepository.save(volunteers)
            return savedVolunteers;
        } catch (error) {
            console.error("Error saving volunteers", error);
            throw error;
        }
    }

    async getAllVolunteerPosition() {
        return await this.volunteerPositionTypeRepository.find()
    }
}
