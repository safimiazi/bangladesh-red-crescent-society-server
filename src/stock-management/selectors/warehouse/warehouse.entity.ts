import { StockinMainTable } from "src/stock-management/stockin-items-main/stockin-items-main.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WareHouseTable {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => StockinMainTable, (stockinMainTable) => stockinMainTable.wareHouseTable)
    warehouses: StockinMainTable[];
}