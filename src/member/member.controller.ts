/* eslint-disable prettier/prettier */

import { Body, Controller, Post, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './member.service';
import { CreateUserDto } from './create-member.dto';
import { User } from './member.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<{ message: string, user: User }> {
    try {
      const user = await this.userService.createUser(createUserDto);
      return { message: 'User created successfully', user };
    } catch (error) {


      throw new HttpException({ message: 'An unexpected error occurred.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}