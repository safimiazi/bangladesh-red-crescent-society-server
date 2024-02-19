import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ItemsTable {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    item: string;

    @Column()
    description: string;
}