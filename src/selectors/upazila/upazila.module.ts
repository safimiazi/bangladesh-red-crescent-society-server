/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UpazilaController } from './upazila.controller';
import { UpazilaService } from './upazila.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UpazilaTable } from './upazila.entity';

@Module({
  controllers: [UpazilaController],
  providers: [UpazilaService],
  imports: [TypeOrmModule.forFeature([UpazilaTable])]
})
export class UpazilaModule {}
