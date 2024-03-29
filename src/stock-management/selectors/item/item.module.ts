import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemTable } from './item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemTable])],
  controllers: [ItemController],
  providers: [ItemService]
})
export class ItemModule { }
