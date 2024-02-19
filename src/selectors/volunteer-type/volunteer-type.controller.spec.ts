import { Test, TestingModule } from '@nestjs/testing';
import { VolunteerTypeController } from './volunteer-type.controller';

describe('VolunteerTypeController', () => {
  let controller: VolunteerTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VolunteerTypeController],
    }).compile();

    controller = module.get<VolunteerTypeController>(VolunteerTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
