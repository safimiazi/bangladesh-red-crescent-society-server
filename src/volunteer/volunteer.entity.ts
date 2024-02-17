/* eslint-disable prettier/prettier */

import { BloodGroupTable } from 'src/selectors/blood-group/blood-group.entity';
import { Religion } from 'src/selectors/religion/religion.entity';
import { Unit } from 'src/selectors/unit/unit.entity';
import { UpazilaTable } from 'src/selectors/upazila/upazila.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Volunteer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  volunteerType: string;

  @Column()
  volunteerId: number;

  @Column()
  volunteerPosition: string;

  @Column()
  gender: string;

  @Column({ nullable: true })
  registrationNo: string;

  @Column({ nullable: true })
  nationalId: number;

  @Column({ nullable: true })
  education: string;

  @Column({ nullable: true })
  dob: Date;

  @Column({ nullable: true })
  joiningDate: Date;

  @Column({ nullable: true })
  mobileNo: string;

  @Column({ nullable: true })
  emergencyContactNo: number;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  fathersName: string;

  @Column({ nullable: true })
  mothersName: string;

  @Column({ nullable: true })
  birthCertificateNo: number;

  @Column({ nullable: true })
  passportNo: number;

  @Column({ nullable: true })
  presentOccupation: string;

  @Column({ nullable: true })
  adress: string;

  @Column({ nullable: true })
  insurance: string;

  @Column({ nullable: true })
  twitter: string;

  @Column({ nullable: true })
  facebook: string;

  @Column({ nullable: true })
  resourceType: string;

  @Column()
  image: string;

  @ManyToOne(() => BloodGroupTable, (bloodGroupTable) => bloodGroupTable.volunteers, { eager: true, nullable: true, cascade: true, onDelete: "CASCADE" })
  @JoinColumn()
  bloodGroupTable: BloodGroupTable;

  @ManyToOne(() => Unit, (unit) => unit.volunteers, { eager: true, nullable: true, cascade: true, onDelete: "CASCADE" })
  @JoinColumn()
  unit: Unit;

  @ManyToOne(() => UpazilaTable, (upazilaTable) => upazilaTable.volunteers, { eager: true, nullable: true, cascade: true, onDelete: "CASCADE" })
  @JoinColumn()
  upazilaTable: UpazilaTable;

  @ManyToOne(() => Religion, (religion) => religion.volunteers, { eager: true, nullable: true, cascade: true, onDelete: "CASCADE" })
  @JoinColumn()
  religion: Religion;

}
