/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Member } from "../../member/member.entity";

@Entity()
export class MemberType {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @OneToMany(() => Member, (member) => member.memberType, { nullable: true })
    members: Member[];

}

