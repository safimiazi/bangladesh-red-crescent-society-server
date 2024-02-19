import { Module } from '@nestjs/common';
import { WarehouseController } from './warehouse.controller';
import { WarehouseService } from './warehouse.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WareHouseTable } from './warehouse.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WareHouseTable])],
  controllers: [WarehouseController],
  providers: [WarehouseService]
})
export class WarehouseModule {}
