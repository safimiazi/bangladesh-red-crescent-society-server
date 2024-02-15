/* eslint-disable prettier/prettier */

import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Volunteer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    unit: string;

    @Column({ nullable: true })
    affiliatedUpazilas: string;

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

    @Column()
    religion: string;

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

    
  // @OneToOne(()=> BloodGroup, {eager:true, nullable: true, cascade: true, onDelete: "CASCADE"})
  // @JoinColumn()
  // volunteerBloodGroup: BloodGroup;

  // @OneToOne(()=> Unit, {eager:true, nullable:true, cascade: true, onDelete: "CASCADE"})
  // @JoinColumn()
  // volunteerUnit: Unit;

}
