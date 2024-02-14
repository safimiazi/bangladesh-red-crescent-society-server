/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { PrefixController } from './prefix.controller';

describe('PrefixController', () => {
  let controller: PrefixController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrefixController],
    }).compile();

    controller = module.get<PrefixController>(PrefixController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
