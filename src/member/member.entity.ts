/* eslint-disable prettier/prettier */

import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { MemberType } from '../selectors/member-type/member-type.entity';
import { Prefix } from '../selectors/prefix/prefix.entity';

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

  @Column({ nullable: true })
  selectedMemberType: string;

  @Column({ nullable: true })
  selectedPrefixType: string;

  @Column({ nullable: true })
  selectedUnitType: string;

  @Column({ nullable: true })
  selectedUpazilaType: string;

  @Column({ nullable: true })
  selectedBloodType: string;

  @Column({ nullable: true })
  selectedReligionType: string;

  @OneToOne(() => MemberType, {eager: true, nullable: true})
  @JoinColumn()
  memberType: MemberType;

  @OneToOne(()=> Prefix, {eager: true, nullable: true })
  @JoinColumn()
  prefix: Prefix;


};
