/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Volunteer } from './volunteer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VolunteerService {
    constructor(
        @InjectRepository(Volunteer)
        private readonly userRepository: Repository<Volunteer>,
    ) { }

    async createVolunteer(userData: Partial<Volunteer>): Promise<Volunteer> {

        try {
            const user = this.userRepository.create(userData);
            console.log(user);
            const savedUser = await this.userRepository.save(user);
            return savedUser;
        } catch (error) {
            console.error('Error saving user:', error);
            throw error;
        }
    }
}
