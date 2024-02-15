/* eslint-disable prettier/prettier */
import { Member } from "src/member/member.entity";
import { Volunteer } from "src/volunteer/volunteer.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Religion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(()=> Member, (member)=> member.religion, { nullable: true})
    members: Member[];

    @OneToMany(() => Volunteer, (volunteer) => volunteer.religion, { nullable: true})
    volunteers: Volunteer[];
}