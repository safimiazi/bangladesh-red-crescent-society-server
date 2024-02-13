/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './member/member.entity';
import { MemberController } from './member/member.controller';
import { MemberService } from './member/member.service';
import { VolunteerModule } from './volunteer/volunteer.module';
import { Volunteer } from './volunteer/volunteer.entity';
import { DropmenuModule } from './dropmenu/dropmenu.module';
import { Dropmenu } from './dropmenu/dropmenu.entity';
import { MemberTypeController } from './selectors/member-type/member-type.controller';
import { ReligionModule } from './selectors/religion/religion.module';
import { UnitModule } from './selectors/unit/unit.module';
import { BloodGroupModule } from './selectors/blood-group/blood-group.module';
import { BloodGroupService } from './selectors/blood-group/blood-group.service';
import { BloodGroupController } from './selectors/blood-group/blood-group.controller';
import { PrefixModule } from './selectors/prefix/prefix.module';
import { PrefixService } from './selectors/prefix/prefix.service';
import { MemberTypeModule } from './selectors/member-type/member-type.module';
import { Prefix } from './selectors/prefix/prefix.entity';
import { Unit } from './selectors/unit/unit.entity';
import { BloodGroup } from './selectors/blood-group/blood-group.entity';
import { MemberType } from './selectors/member-type/member-type.entity';
import { Religion } from './selectors/religion/religion.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Member, Volunteer, Dropmenu, Prefix, Unit, BloodGroup, MemberType, Religion],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Member]),
    VolunteerModule,
    DropmenuModule,
    MemberTypeModule,
    PrefixModule,
    BloodGroupModule,
    UnitModule,
    ReligionModule,
  ],
  controllers: [MemberController, MemberTypeController, BloodGroupController],
  providers: [MemberService, PrefixService, BloodGroupService,],
})
export class AppModule {}
