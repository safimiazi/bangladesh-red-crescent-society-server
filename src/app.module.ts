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
import { ReligionModule } from './selectors/religion/religion.module';
import { UnitModule } from './selectors/unit/unit.module';
import { PrefixModule } from './selectors/prefix/prefix.module';
import { MemberTypeModule } from './selectors/member-type/member-type.module';
import { Prefix } from './selectors/prefix/prefix.entity';
import { Unit } from './selectors/unit/unit.entity';
import { MemberType } from './selectors/member-type/member-type.entity';
import { Religion } from './selectors/religion/religion.entity';
import { BloodGroupModule } from './selectors/blood-group/blood-group.module';
import { BloodGroup } from './selectors/blood-group/blood-group.entity';
import { UpazilaModule } from './selectors/upazila/upazila.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Member, Volunteer, Dropmenu, Prefix, Unit, MemberType, Religion, BloodGroup, Prefix],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Member, Prefix]),
    VolunteerModule,
    DropmenuModule,
    MemberTypeModule,
    PrefixModule,
    UnitModule,
    ReligionModule,
    BloodGroupModule,
    UpazilaModule,
  ],
  controllers: [MemberController],
  providers: [MemberService],
})
export class AppModule {}
