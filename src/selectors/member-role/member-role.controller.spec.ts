/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { MemberRoleController } from './member-role.controller';

describe('MemberRoleController', () => {
  let controller: MemberRoleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemberRoleController],
    }).compile();

    controller = module.get<MemberRoleController>(MemberRoleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
