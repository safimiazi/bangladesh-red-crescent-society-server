/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Member } from "../../member/member.entity";

@Entity()
export class VulanteerPosition {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @OneToMany(() => Member, (member) => member.vulanteerPosition, { nullable: true })
    members: Member[];

}

