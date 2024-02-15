/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { UpazilaController } from './upazila.controller';

describe('UpazilaController', () => {
  let controller: UpazilaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpazilaController],
    }).compile();

    controller = module.get<UpazilaController>(UpazilaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
