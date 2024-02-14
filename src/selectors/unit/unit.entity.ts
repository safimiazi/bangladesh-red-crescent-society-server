/* eslint-disable prettier/prettier */
import { Member } from "src/member/member.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Unit {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @OneToOne(()=> Member, (member)=> member.unit, {nullable: true})
    member: Member;


}