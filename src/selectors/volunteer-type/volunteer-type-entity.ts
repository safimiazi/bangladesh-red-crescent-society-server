import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class VolunteerTypeTable {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}