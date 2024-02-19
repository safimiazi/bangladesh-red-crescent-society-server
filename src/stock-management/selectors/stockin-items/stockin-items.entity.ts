import { StockinMainTable } from "src/stock-management/stockin-items-main/stockin-items-main.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StockinItemsTable {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    // stockinItems
    @OneToMany(() => StockinMainTable, (stockinMainTable) => stockinMainTable.stockinItemsTable)
    stockinItems: StockinItemsTable[]
}