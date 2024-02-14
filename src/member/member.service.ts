/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Member } from './member.entity';
import { InjectRepository } from '@nestjs/typeorm/dist/common';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
  ) {}

  async createMember(memberData: Partial<Member>): Promise<Member> {
    const member = this.memberRepository.create(memberData);
    console.log(member);
    return await this.memberRepository.save(member);
  }


  async getAllMembers(): Promise<Member[]> {
    return await this.memberRepository.find();
  }


  async findAllMember(): Promise<Member[]> {
    return this.memberRepository.find({ relations: ["memberType"] });
}
 
}
