import { ItemsTable } from "src/stock-management/items/items.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ItemTable {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    item: string;

    @OneToMany(() => ItemsTable, (itemsTable) => itemsTable.itemTable, { nullable: false })
    @JoinColumn()
    itemsTable: ItemsTable[];
}