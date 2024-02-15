/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberType } from './member-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MemberTypeService {
    constructor(
        @InjectRepository(MemberType)
        private readonly memberTypeRepository: Repository<MemberType>,
    ) { }

    async createMemberType(memberType: Partial<MemberType>): Promise<MemberType> {
        try {
            const member = this.memberTypeRepository.create(memberType);
            console.log(member);
            const saveMemberType = await this.memberTypeRepository.save(member);
            return saveMemberType;
        } catch (error) {
            console.error('Error saving user:', error);
            throw error;
        }
    }

    async getAllMemberTypes(): Promise<MemberType[]> {
        return await this.memberTypeRepository.find();
    }



}
