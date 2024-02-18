/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VulanteerPosition } from './Vultanteer-Position.entity';


@Injectable()
export class VulanteerPositionService {
    constructor(
        @InjectRepository(VulanteerPosition)
        private readonly vulanteerPositionRepository: Repository<VulanteerPosition>,
    ) { }

    async createVulanteerPosition(vulanteerPosition: Partial<VulanteerPosition>): Promise<VulanteerPosition> {
        try {
            const member = this.vulanteerPositionRepository.create(vulanteerPosition);
            console.log(member);
            const saveVulanteerPosition = await this.vulanteerPositionRepository.save(member);
            return saveVulanteerPosition;
        } catch (error) {
            console.error('Error saving user:', error);
            throw error;
        }
    }

    async getAllMemberPosition(): Promise<VulanteerPosition[]> {
        return await this.vulanteerPositionRepository.find();
    }



}
