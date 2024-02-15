/* eslint-disable prettier/prettier */
import { Member } from "src/member/member.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UpazilaTable {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Member, (member) => member.upazilaTable)
    members: Member[];
}