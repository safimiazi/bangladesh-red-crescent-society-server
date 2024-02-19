import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ItemTable {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    item: string;
}