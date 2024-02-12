import { Injectable } from '@nestjs/common';
import { Dropmenu } from './dropmenu.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DropmenuService {
    constructor(
        @InjectRepository(Dropmenu)
        private readonly dropmenuRepository: Repository<Dropmenu>,
    ) { }


    async findAll(): Promise<Dropmenu[]> {
        return this.dropmenuRepository.find();
    }
    

    async createDropmenu(userData: Partial<Dropmenu>): Promise<Dropmenu> {

        try {
            const dropmenu = this.dropmenuRepository.create(userData);
            console.log(dropmenu);
            const savedDropmenu = await this.dropmenuRepository.save(dropmenu);
            return savedDropmenu;
        } catch (error) {
            console.error('Error saving user:', error);
            throw error;
        }
    }
}
