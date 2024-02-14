/* eslint-disable prettier/prettier */
import { Member } from "src/member/member.entity";
import { Volunteer } from "src/volunteer/volunteer.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BloodGroup {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;


    // @OneToOne(() => Member, (member) => member.bloodGroup, { nullable: true })
    // member: Member;

    
    // @OneToOne(() => Volunteer, (volunteer) => volunteer.volunteerBloodGroup, { nullable: true })
    // volunteer: Volunteer;


}