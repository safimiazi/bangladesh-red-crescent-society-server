import { Test, TestingModule } from '@nestjs/testing';
import { VolunteerPositionController } from './volunteer-position.controller';

describe('VolunteerPositionController', () => {
  let controller: VolunteerPositionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VolunteerPositionController],
    }).compile();

    controller = module.get<VolunteerPositionController>(VolunteerPositionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
