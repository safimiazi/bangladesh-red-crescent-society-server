/* eslint-disable prettier/prettier */

import { Body, Controller, Post, HttpException, HttpStatus, Get, UseInterceptors, UploadedFile } from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './create-member.dto';
import { Member } from './member.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path'

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) { }

  @Post()
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads/members/images',
      filename: (req, file, cb) => {
        console.log('file from filename',file);
        const sanitizedFilename = file.originalname.replace(/\\/g, '/');
        const filename = sanitizedFilename + Math.round(Math.random() * 1E9);
        const fileExtension = path.extname(file.originalname);
        const newFileName = `${filename}${fileExtension}`;
        cb(null, newFileName);
      }
    })
  }))
  async createUser(@UploadedFile() image: Express.Multer.File, @Body() createMemberDto: CreateMemberDto): Promise<{ message: string, member: Member }> {
    try {
      console.log('Request Body:', createMemberDto);
      console.log('image',image);
      createMemberDto.image = image?.path.replace(/\\/g, '/');
      console.log('from controller 2', image);
      const member = await this.memberService.createUser(createMemberDto);
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
}