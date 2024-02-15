/* eslint-disable prettier/prettier */
import { Member } from "src/member/member.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Religion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(()=> Member, (member)=> member.religion, { nullable: true})
    member: Member;
    
}