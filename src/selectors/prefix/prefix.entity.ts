/* eslint-disable prettier/prettier */
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Member } from "../../member/member.entity";

@Entity()
export class Prefix {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @OneToOne(()=> Member, (member)=> member.prefix)
    member:Member;
}