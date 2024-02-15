/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MemberRoleController } from './member-role.controller';
import { MemberRoleService } from './member-role.service';
import { MemberRoleTable } from './member-role.entity';

@Module({
  controllers: [MemberRoleController],
  providers: [MemberRoleService],
  imports: [TypeOrmModule.forFeature([MemberRoleTable])]
})
export class MemberRoleModule {}
