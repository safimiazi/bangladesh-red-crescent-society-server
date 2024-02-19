/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { VolunteerTypeService } from './volunteer-type.service';

describe('VolunteerTypeService', () => {
  let service: VolunteerTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VolunteerTypeService],
    }).compile();

    service = module.get<VolunteerTypeService>(VolunteerTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
