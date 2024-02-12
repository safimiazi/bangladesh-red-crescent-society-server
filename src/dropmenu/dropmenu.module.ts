import { Module } from '@nestjs/common';
import { DropmenuController } from './dropmenu.controller';
import { DropmenuService } from './dropmenu.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dropmenu } from './dropmenu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dropmenu])],
  controllers: [DropmenuController],
  providers: [DropmenuService]
})
export class DropmenuModule {}
