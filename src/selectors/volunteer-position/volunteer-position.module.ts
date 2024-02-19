import { Module } from '@nestjs/common';
import { VolunteerPositionController } from './volunteer-position.controller';
import { VolunteerPositionService } from './volunteer-position.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VolunteerPositionTable } from './volunteer-position.entity';

@Module({
  controllers: [VolunteerPositionController],
  providers: [VolunteerPositionService],
  imports: [TypeOrmModule.forFeature([VolunteerPositionTable])],
})
export class VolunteerPositionModule {}
