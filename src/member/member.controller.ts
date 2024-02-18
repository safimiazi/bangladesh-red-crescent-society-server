/* eslint-disable prettier/prettier */

import { Body, Controller, Post, HttpException, HttpStatus, Get} from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './create-member.dto';
import { Member } from './member.entity';

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) { }

  @Post()
  async createUser(@Body() createMemberDto: CreateMemberDto): Promise<{ status: string, message: string, member?: Member }> {
    try {
      const member = await this.memberService.createUser(createMemberDto);
      console.log(member);
      return { status: 'success', message: 'User created successfully', member };
    } catch (error) {
      console.log(error);
      return { status: 'error', message: 'An unexpected error occurred.' };
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


 


}