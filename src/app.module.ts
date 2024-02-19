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
import { MemberRoleTable } from './selectors/member-role/member-role.entity';
import { VolunteerTypeModule } from './selectors/volunteer-type/volunteer-type.module';
import { VolunteerTypeTable } from './selectors/volunteer-type/volunteer-type-entity';

import { VolunteerPositionModule } from './selectors/volunteer-position/volunteer-position.module';
import { VolunteerPositionTable } from './selectors/volunteer-position/volunteer-position.entity';
import { ItemsModule } from './stock-management/items/items.module';
import { ItemModule } from './stock-management/selectors/item/item.module';
import { ItemTable } from './stock-management/selectors/item/item.entity';
import { ItemsTable } from './stock-management/items/items.entity';
import { WarehouseModule } from './stock-management/selectors/warehouse/warehouse.module';
import { StockinItemsModule } from './stock-management/selectors/stockin-items/stockin-items.module';
import { StockinItemsTable } from './stock-management/selectors/stockin-items/stockin-items.entity';
import { WareHouseTable } from './stock-management/selectors/warehouse/warehouse.entity';
import { StockinItemsMainModule } from './stock-management/stockin-items-main/stockin-items-main.module';
import { StockinMainTable } from './stock-management/stockin-items-main/stockin-items-main.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Member, Volunteer, Prefix, Unit, MemberType, Religion, BloodGroupTable, Prefix, UpazilaTable, MemberRoleTable, VolunteerTypeTable, ItemTable, ItemsTable, StockinItemsTable, WareHouseTable, VolunteerTypeTable,VolunteerPositionTable, StockinMainTable],
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
    VolunteerTypeModule,
    VolunteerPositionModule,
    ItemsModule,
    ItemModule,
    WarehouseModule,
    StockinItemsModule,
    StockinItemsMainModule,
  ],
  controllers: [MemberController],
  providers: [MemberService],
})
export class AppModule { }
