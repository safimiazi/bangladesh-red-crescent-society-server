/* eslint-disable prettier/prettier */
import { Member } from "src/member/member.entity";
import { Volunteer } from "src/volunteer/volunteer.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UpazilaTable {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    name: string;

    @OneToMany(() => Member, (member) => member.upazilaTable)
    members: Member[];

    @OneToMany(() => Volunteer, (volunteer) => volunteer.upazilaTable, { nullable: true })
    volunteers: Volunteer[];
}