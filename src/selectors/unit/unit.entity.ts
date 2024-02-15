/* eslint-disable prettier/prettier */
import { Member } from "src/member/member.entity";
import { Volunteer } from "src/volunteer/volunteer.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Unit {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @OneToMany(()=> Member, (member)=> member.unit, {nullable: true})
    members: Member[];


    @OneToMany(()=> Volunteer, (volunteer)=> volunteer.unit, {nullable: true})
    volunteers: Volunteer[];


}