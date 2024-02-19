import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StockinItemsTable {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}