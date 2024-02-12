/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { VolunteerModule } from './volunteer/volunteer.module';
import { Volunteer } from './volunteer/volunteer.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: (process.env.TYPE || 'postgres') as any,
      host: process.env.HOST,
      port: parseInt(process.env.PORT, 10),
      username: process.env.USERNAME ,
      password: process.env.PASSWORD ,
      database: process.env.DATABASE,
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
