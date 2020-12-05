import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service'


describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should describe itself ', async () => {
    const result = await service.getAppDescription();
    const expected = {
      title: 'The Infinite Store'
  }
    expect(result).toEqual(expected)
  });
});
