import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsTable } from './items.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemsTable])],
  controllers: [ItemsController],
  providers: [ItemsService]
})
export class ItemsModule {}
