/* eslint-disable prettier/prettier */
// src/entities/CheckboxCapture.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MemberRoleTable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'boolean', default: false })
  managingBoard: boolean;

  @Column({ type: 'boolean', default: false })
  unitExecutive: boolean;

  @Column({ type: 'boolean', default: false })
  chairman: boolean;
}
