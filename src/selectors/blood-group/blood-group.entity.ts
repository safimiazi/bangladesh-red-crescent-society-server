/* eslint-disable prettier/prettier */
import { Member } from "src/member/member.entity";
import { Volunteer } from "src/volunteer/volunteer.entity";
import { Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BloodGroupTable {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;


    @OneToMany(() => Member, (member) => member.bloodGroupTable, { nullable: true })
    members: Member[];

    
    @OneToMany(() => Volunteer, (volunteer) => volunteer.bloodGroupTable, { nullable: true })
    volunteers: Volunteer[];


}