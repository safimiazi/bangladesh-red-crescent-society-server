import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ItemTable } from "../selectors/item/item.entity";

@Entity()
export class ItemsTable {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => ItemTable, (itemTable) => itemTable.itemsTable, { nullable: false })
    @JoinColumn()
    itemTable: ItemTable;

    @Column()
    description: string;

}