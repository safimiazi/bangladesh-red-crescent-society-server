/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { VolunteerModule } from './volunteer/volunteer.module';
import { Volunteer } from './volunteer/volunteer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '636deadline',
      database: 'Test-1',
      entities: [User, Volunteer],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
    VolunteerModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule { }
