/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './member/member.entity';
import { MemberController } from './member/member.controller';
import { MemberService } from './member/member.service';
import { VolunteerModule } from './volunteer/volunteer.module';
import { Volunteer } from './volunteer/volunteer.entity';
import { ReligionModule } from './selectors/religion/religion.module';
import { UnitModule } from './selectors/unit/unit.module';
import { PrefixModule } from './selectors/prefix/prefix.module';
import { MemberTypeModule } from './selectors/member-type/member-type.module';
import { Prefix } from './selectors/prefix/prefix.entity';
import { Unit } from './selectors/unit/unit.entity';
import { MemberType } from './selectors/member-type/member-type.entity';
import { Religion } from './selectors/religion/religion.entity';
import { BloodGroupModule } from './selectors/blood-group/blood-group.module';
import { UpazilaModule } from './selectors/upazila/upazila.module';
import { UpazilaTable } from './selectors/upazila/upazila.entity';
import { BloodGroupTable } from './selectors/blood-group/blood-group.entity';
import { MemberRoleModule } from './selectors/member-role/member-role.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Member, Volunteer, Prefix, Unit, MemberType, Religion, BloodGroupTable, Prefix, UpazilaTable],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Member, Prefix]),
    VolunteerModule,
    MemberTypeModule,
    PrefixModule,
    UnitModule,
    ReligionModule,
    BloodGroupModule,
    UpazilaModule,
    MemberRoleModule,
  ],
  controllers: [MemberController],
  providers: [MemberService],
})
export class AppModule {}
