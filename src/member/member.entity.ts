/* eslint-disable prettier/prettier */

import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { MemberType } from '../selectors/member-type/member-type.entity';
import { Prefix } from '../selectors/prefix/prefix.entity';
import { Unit } from '../selectors/unit/unit.entity';
import { Religion } from '../selectors/religion/religion.entity';
import { BloodGroupTable } from '../selectors/blood-group/blood-group.entity';
import { UpazilaTable } from 'src/selectors/upazila/upazila.entity';
import { MemberRoleTable } from 'src/selectors/member-role/member-role.entity';

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

  @Column({nullable: true})
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

  @Column({ nullable: true })
  fatherName: string;

  @Column({ nullable: true })
  presentAddress: string;

  @Column({ nullable: true })
  nationalId: string;

  @Column({ nullable: true })
  education: string;

  @Column({ nullable: true })
  projectActivities: string;

  @Column({ nullable: true })
  isAlive: boolean;

  @Column({ nullable: true })
  isMale: boolean;

  @Column({ nullable: true })
  isFemale: boolean;

  @Column({nullable: true})
  image: string;

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

  @ManyToMany(() => MemberRoleTable, (memberRoleTable) => memberRoleTable.members, {nullable: true})
  @JoinTable()
  memberRoleTable: MemberRoleTable[];

};
