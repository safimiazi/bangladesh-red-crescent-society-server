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

  async createUser(memberData: Partial<Member>): Promise<Member> {
    const user = this.memberRepository.create(memberData);
    console.log(user);
    return await this.memberRepository.save(user);
  }
 
}
