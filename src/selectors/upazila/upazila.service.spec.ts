/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { UpazilaService } from './upazila.service';

describe('UpazilaService', () => {
  let service: UpazilaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpazilaService],
    }).compile();

    service = module.get<UpazilaService>(UpazilaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
