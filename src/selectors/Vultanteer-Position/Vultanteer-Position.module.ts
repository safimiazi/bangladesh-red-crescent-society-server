import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VulanteerPositionController } from './Vulanteer-Position.controller';
import { VulanteerPosition } from './Vultanteer-Position.entity';
import { VulanteerPositionService } from './Vultanteer-Position.service';

@Module({
  imports: [TypeOrmModule.forFeature([VulanteerPosition])],
  controllers: [VulanteerPositionController],
  providers: [VulanteerPositionService]
})
export class VulanteerPositionModule {}