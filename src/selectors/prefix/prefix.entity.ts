/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Member } from "../../member/member.entity";

@Entity()
export class Prefix {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Member, (member) => member.prefix, { nullable: true })
    member: Member;
}