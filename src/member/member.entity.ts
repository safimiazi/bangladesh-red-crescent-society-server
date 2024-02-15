/* eslint-disable prettier/prettier */

import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { MemberType } from '../selectors/member-type/member-type.entity';
import { Prefix } from '../selectors/prefix/prefix.entity';
import { Unit } from '../selectors/unit/unit.entity';
import { Religion } from '../selectors/religion/religion.entity';
import { BloodGroupTable } from '../selectors/blood-group/blood-group.entity';
import { UpazilaTable } from 'src/selectors/upazila/upazila.entity';

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  memberIdCard: string;

  @Column({ nullable: true })
  enrollmentDate: Date;

  @Column({ nullable: true })
  birthDate: Date;

  @Column()
  email: string;

  @Column()
  motherName: string;

  @Column({ nullable: true })
  spouseName: string;

  @Column()
  permanentAddress: string;

  @Column({ nullable: true })
  Occupation: string;

  @Column({ nullable: true })
  birthCertificateNo: string;

  @Column({ nullable: true })
  passportNo: string;

  @Column({ nullable: true })
  memberFormSerial: string;

  @Column({ nullable: true })
  moneyReceiptNo: string;

  @Column({ nullable: true })
  emergencyContactNo: string;

  @Column({ nullable: true })
  contactNo: string;

  @Column()
  fatherName: string;

  @Column({ nullable: true })
  presentAddress: string;

  @Column({ nullable: true })
  nationalId: string;

  @Column({ nullable: true })
  education: string;

  @Column({ nullable: true })
  projectActivities: string;

  @Column()
  isAlive: boolean;

  @Column()
  isManagingBoardMember: boolean;

  @Column()
  isUnitExecutiveCommitteeMember: boolean;

  @Column()
  isChairman: boolean;

  @Column()
  isMale: boolean;

  @Column()
  isFemale: boolean;

  @ManyToOne(() => UpazilaTable, (upazilaTable) => upazilaTable.members)
  @JoinColumn()
  upazilaTable: UpazilaTable;

  @ManyToOne(() => MemberType, (memberType) => memberType.members)
  @JoinColumn()
  memberType: MemberType;

  @ManyToOne(() => Prefix, (prefix)=> prefix.member)
  @JoinColumn()
  prefix: Prefix;

  @ManyToOne(() => Unit, (unit) => unit.members)
  @JoinColumn()
  unit: Unit;

  @ManyToOne(()=> Religion, (religion)=> religion.members)
  @JoinColumn()
  religion: Religion;

  @ManyToOne(() => BloodGroupTable, (bloodGroupTable) => bloodGroupTable.members)
  @JoinColumn()
  bloodGroupTable: BloodGroupTable;

};
