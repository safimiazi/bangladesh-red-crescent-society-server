import { Module } from '@nestjs/common';
import { UpazilaController } from './upazila.controller';
import { UpazilaService } from './upazila.service';

@Module({
  controllers: [UpazilaController],
  providers: [UpazilaService]
})
export class UpazilaModule {}
