/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrefixController } from './prefix.controller';
import { PrefixService } from './prefix.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prefix } from './prefix.entity';

// import { PrefixController } from './prefix.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Prefix])],
  controllers: [PrefixController],
  providers: [PrefixService]
})
export class PrefixModule {}
