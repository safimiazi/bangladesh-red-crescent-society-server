/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { VulanteerPositionService } from './Vultanteer-Position.service';


describe('MemberTypeService', () => {
  let service: VulanteerPositionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VulanteerPositionService],
    }).compile();

    service = module.get<VulanteerPositionService>(VulanteerPositionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
