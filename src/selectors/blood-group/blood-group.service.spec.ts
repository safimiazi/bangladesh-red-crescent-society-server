import { Test, TestingModule } from '@nestjs/testing';
import { BloodGroupService } from './blood-group.service';

describe('BloodGroupService', () => {
  let service: BloodGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BloodGroupService],
    }).compile();

    service = module.get<BloodGroupService>(BloodGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
