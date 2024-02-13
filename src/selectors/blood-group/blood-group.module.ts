import { Module } from '@nestjs/common';
import { BloodGroupController } from './blood-group.controller';
import { BloodGroupService } from './blood-group.service';

@Module({
  controllers: [BloodGroupController],
  providers: [BloodGroupService]
})
export class BloodGroupModule {}
