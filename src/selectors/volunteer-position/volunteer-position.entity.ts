/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class VolunteerPositionTable {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}