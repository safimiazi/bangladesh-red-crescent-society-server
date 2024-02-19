import { Module } from '@nestjs/common';
import { StockinItemsController } from './stockin-items.controller';
import { StockinItemsService } from './stockin-items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockinItemsTable } from './stockin-items.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StockinItemsTable])],
  controllers: [StockinItemsController],
  providers: [StockinItemsService]
})
export class StockinItemsModule {}
