/* eslint-disable prettier/prettier */

import { Body, Controller, Post, HttpException, HttpStatus } from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './create-member.dto';
import { Member } from './member.entity';

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) { }

  @Post()
  async createMember(@Body() createMemberDto: CreateMemberDto): Promise<{ message: string, member: Member }> {
    try {
      const member = await this.memberService.createMember(createMemberDto);
      return { message: 'User created successfully', member };
    } catch (error) {


      throw new HttpException({ message: 'An unexpected error occurred.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}