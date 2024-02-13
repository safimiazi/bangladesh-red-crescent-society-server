import { Module } from '@nestjs/common';
import { ReligionController } from './religion.controller';
import { ReligionService } from './religion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Religion } from './religion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Religion]),
  ],
  controllers: [ReligionController],
  providers: [ReligionService]
})
export class ReligionModule {}
