import { Test, TestingModule } from '@nestjs/testing';
import { DropmenuService } from './dropmenu.service';

describe('DropmenuService', () => {
  let service: DropmenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DropmenuService],
    }).compile();

    service = module.get<DropmenuService>(DropmenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
