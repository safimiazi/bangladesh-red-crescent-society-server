/* eslint-disable prettier/prettier */
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../member/member.entity";

@Entity()
export class MemberType {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @OneToOne(() => User, (user)=> user.memberType)
    user: User;
}