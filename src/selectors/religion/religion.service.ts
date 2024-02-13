import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Religion } from './religion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReligionService {
    constructor(
        @InjectRepository(Religion)
        private readonly religionRepository: Repository<Religion>,
    ) { }

    async createReligion(religionData: Partial<Religion>): Promise<Religion> {
        try {
            const religion = this.religionRepository.create(religionData);
            console.log(religion);
            const savedReligion = await this.religionRepository.save(religion);
            return savedReligion;
        } catch (error) {
            console.error('Error saving user:', error);
            throw error;
        }
    }
}
