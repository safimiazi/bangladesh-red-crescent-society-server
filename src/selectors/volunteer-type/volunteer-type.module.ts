import { Module } from '@nestjs/common';
import { VolunteerTypeController } from './volunteer-type.controller';
import { VolunteerTypeService } from './volunteer-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VolunteerTypeTable } from './volunteer-type-entity';

@Module({
  controllers: [VolunteerTypeController],
  providers: [VolunteerTypeService],
  imports: [TypeOrmModule.forFeature([VolunteerTypeTable])],
})
export class VolunteerTypeModule {}
