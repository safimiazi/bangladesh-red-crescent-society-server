import { Test, TestingModule } from '@nestjs/testing';
import { BloodGroupController } from './blood-group.controller';

describe('BloodGroupController', () => {
  let controller: BloodGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BloodGroupController],
    }).compile();

    controller = module.get<BloodGroupController>(BloodGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
