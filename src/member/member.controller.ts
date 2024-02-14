/* eslint-disable prettier/prettier */

import { Body, Controller, Post, HttpException, HttpStatus, Get, Query, Res } from '@nestjs/common';
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
      console.log(member);
      return { message: 'User created successfully', member };
    } catch (error) {
      console.log(error);
      throw new HttpException({ message: 'An unexpected error occurred.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  
  @Get()
  async getAllMembers(): Promise<{ message: string; members: Member[] }> {
    try {
      const members = await this.memberService.getAllMembers();
      return { message: 'Successfully retrieved all members', members };
    } catch (error) {
      console.error(error);
      throw new HttpException(
        { message: 'An unexpected error occurred.' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }


  @Get('members') // Adjusted the path here
    async findAllMember(): Promise<Member[]> {
        return this.memberService.findAllMember();
    }



}