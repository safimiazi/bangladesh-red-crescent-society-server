/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberRoleTable } from './member-role.entity';

@Injectable()
export class MemberRoleService {
    constructor(
        @InjectRepository(MemberRoleTable)
        private readonly memberRoleTableRepository : Repository<MemberRoleTable>,
    ) {}


async createMemberRole(memberRoleData: Partial<MemberRoleTable>): Promise<MemberRoleTable> {
    try {
        const memberRole = this.memberRoleTableRepository.create(memberRoleData)
    console.log(memberRole);
    const saveMemberRole = await this.memberRoleTableRepository.save(memberRole)
    return saveMemberRole;
    } catch (error) {
        console.error("Error saving Member Role", error)
    }
}

async getAllMemberRole(): Promise<MemberRoleTable[]>{
    return await this.memberRoleTableRepository.find()
}


}
