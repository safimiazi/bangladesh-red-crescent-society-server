/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { VulanteerPositionController } from './Vulanteer-Position.controller';
// import { MemberTypeController } from './member-type.controller';

describe('MemberTypeController', () => {
  let controller: VulanteerPositionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VulanteerPositionController],
    }).compile();

    VulanteerPositionController  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
