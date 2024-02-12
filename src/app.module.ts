/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './member/member.entity';
import { UserController } from './member/member.controller';
import { UserService } from './member/member.service';
import { VolunteerModule } from './volunteer/volunteer.module';
import { Volunteer } from './volunteer/volunteer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Volunteer],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
    VolunteerModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
