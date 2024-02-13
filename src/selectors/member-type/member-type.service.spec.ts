/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { MemberTypeService } from './member-type.service';

describe('MemberTypeService', () => {
  let service: MemberTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemberTypeService],
    }).compile();

    service = module.get<MemberTypeService>(MemberTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
