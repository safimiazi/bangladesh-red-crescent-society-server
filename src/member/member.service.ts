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
    return await this.memberRepository.save(member);
  }
 
}
