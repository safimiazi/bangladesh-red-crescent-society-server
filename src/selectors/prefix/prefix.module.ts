import { Module } from '@nestjs/common';
import { PrefixController } from './prefix.controller';

@Module({
  controllers: [PrefixController]
})
export class PrefixModule {}
