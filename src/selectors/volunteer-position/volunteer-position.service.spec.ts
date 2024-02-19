import { Test, TestingModule } from '@nestjs/testing';
import { VolunteerPositionService } from './volunteer-position.service';

describe('VolunteerPositionService', () => {
  let service: VolunteerPositionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VolunteerPositionService],
    }).compile();

    service = module.get<VolunteerPositionService>(VolunteerPositionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
