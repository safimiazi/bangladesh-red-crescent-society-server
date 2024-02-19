import { Module } from '@nestjs/common';
import { StockinItemsMainController } from './stockin-items-main.controller';
import { StockinItemsMainService } from './stockin-items-main.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockinMainTable } from './stockin-items-main.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StockinMainTable])],
  controllers: [StockinItemsMainController],
  providers: [StockinItemsMainService]
})
export class StockinItemsMainModule {}
