import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { StockinItemsTable } from "../selectors/stockin-items/stockin-items.entity";
import { WareHouseTable } from "../selectors/warehouse/warehouse.entity";

@Entity()
export class StockinMainTable{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    name: string;

    @Column({nullable: true})
    available: number;

    @Column({nullable: true})
    quantity: number;

    @Column({nullable: true})
    date: Date;

    @ManyToOne(() => StockinItemsTable, (stockinItemsTable) => stockinItemsTable.stockinItems)
    @JoinColumn()
    stockinItemsTable: StockinItemsTable;

    @ManyToOne(() => WareHouseTable, (wareHouseTable) => wareHouseTable.warehouses)
    @JoinColumn()
    wareHouseTable: WareHouseTable;

}