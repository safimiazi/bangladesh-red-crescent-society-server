/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { MemberTypeController } from './member-type.controller';

describe('MemberTypeController', () => {
  let controller: MemberTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemberTypeController],
    }).compile();

    controller = module.get<MemberTypeController>(MemberTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
