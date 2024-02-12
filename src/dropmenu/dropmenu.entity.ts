// member-profile.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dropmenu {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'simple-array' })
    prefix: string[];

    @Column({ type: 'simple-array' })
    memberType: string[];

    @Column({ type: 'simple-array' })
    unit: string[];

    @Column({ type: 'simple-array' })
    affiliatedUpazila: string[];

    @Column({ type: 'simple-array' })
    bloodGroup: string[];

    @Column({ type: 'simple-array' })
    religion: string[];
}
