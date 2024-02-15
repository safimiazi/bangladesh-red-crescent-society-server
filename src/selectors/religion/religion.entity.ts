/* eslint-disable prettier/prettier */
import { Member } from "src/member/member.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Religion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(()=> Member, (member)=> member.religion, { nullable: true})
    members: Member[];
}