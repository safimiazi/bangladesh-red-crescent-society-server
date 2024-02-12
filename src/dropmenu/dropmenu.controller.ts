import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { DropmenuService } from './dropmenu.service';
import { CreateDropmenuDto } from './create-dropmenu.dto';
import { Dropmenu } from './dropmenu.entity';

@Controller('dropmenu')
export class DropmenuController {

    constructor(private readonly dropmenuService: DropmenuService) { }
    
    @Get('/menus')
    findAll(): Promise<Dropmenu[]> {
        return this.dropmenuService.findAll();
    }

    @Post()
    async createVolunteer(@Body() createDropmenuDto: CreateDropmenuDto): Promise<{ message: string, dropmenu: Dropmenu }> {
        try {
            const dropmenu = await this.dropmenuService.createDropmenu(createDropmenuDto);
            return { message: 'User created successfully', dropmenu };
        } catch (error) {
            throw new HttpException({ message: 'An unexpected error occurred.' }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
