/* eslint-disable prettier/prettier */
import { Body, Controller, HttpException, HttpStatus, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { VolunteerService } from './volunteer.service';
import { Volunteer } from './volunteer.entity';
import { CreateVolunteerDto } from './create-volunter-dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path'

@Controller('volunteer')
export class VolunteerController {

  constructor(private readonly volunteerService: VolunteerService) { }


  @Post()
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads/volunteers/images',
      filename: (req, file, cb) => {
        const sanitizedFilename = file.originalname.replace(/\\/g, '/');
        const filename = sanitizedFilename + Math.round(Math.random() * 1E9);
        const fileExtension = path.extname(file.originalname);
        const newFileName = `${filename}${fileExtension}`;
        cb(null, newFileName);
      }
    })
  }))
  async createDropmenu(@UploadedFile() image: Express.Multer.File, @Body() createVolunteerDto: CreateVolunteerDto): Promise<{ message: string, volunteer: Volunteer }> {
    try {
      createVolunteerDto.image = image.path.replace(/\\/g, '/');
      console.log('from controller 2', image);
      const volunteer = await this.volunteerService.createVolunteer(createVolunteerDto);
      return { message: 'User created successfully', volunteer };
    } catch (error) {
      throw new HttpException({ message: 'An unexpected error occurred.' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
