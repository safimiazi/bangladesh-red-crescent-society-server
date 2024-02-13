/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MemberTypeService } from './member-type.service';

@Module({
  providers: [MemberTypeService]
})
export class MemberTypeModule {}
