/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Religion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}