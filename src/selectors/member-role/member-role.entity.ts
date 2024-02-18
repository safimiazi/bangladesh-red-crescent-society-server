/* eslint-disable prettier/prettier */
// src/entities/CheckboxCapture.entity.ts

import { Member } from 'src/member/member.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity()
export class MemberRoleTable {

  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  name: string;

  // @Column({ type: 'boolean', default: false })
  // managingBoard: boolean;

  // @Column({ type: 'boolean', default: false })
  // unitExecutive: boolean;

  // @Column({ type: 'boolean', default: false })
  // chairman: boolean;

  @ManyToMany(() => Member, (member) => member.memberRoleTable, {nullable: true})

members: Member[];
};
