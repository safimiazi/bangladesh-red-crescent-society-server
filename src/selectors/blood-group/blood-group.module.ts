import { TypeOrmModule } from '@nestjs/typeorm';
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BloodGroupController } from './blood-group.controller';
import { BloodGroupService } from './blood-group.service';
import { BloodGroupTable } from './blood-group.entity';

@Module({
  controllers: [BloodGroupController],
  providers: [BloodGroupService],
  imports: [TypeOrmModule.forFeature([BloodGroupTable])]
})
export class BloodGroupModule {}
