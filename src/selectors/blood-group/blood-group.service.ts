/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BloodGroupTable } from './blood-group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BloodGroupService {
    constructor(
        @InjectRepository(BloodGroupTable)
        private readonly bloodGroupTableRepository : Repository<BloodGroupTable>,
    ) {}


async createBloodGroup(bloodGroupData: Partial<BloodGroupTable>): Promise<BloodGroupTable> {
    try {
        const bloodGroup = this.bloodGroupTableRepository.create(bloodGroupData)
    console.log(bloodGroup);
    const saveBloodGroup = await this.bloodGroupTableRepository.save(bloodGroup)
    return saveBloodGroup;
    } catch (error) {
        console.error("Error saving bloodGroup", error)
    }
}

async getAllBloodGroup(): Promise<BloodGroupTable[]>{
    return await this.bloodGroupTableRepository.find()
}


}
