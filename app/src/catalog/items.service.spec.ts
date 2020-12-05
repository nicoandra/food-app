import { Test, TestingModule } from '@nestjs/testing';
import { ItemsService } from './items.service';
import { CatalogModule } from './catalog.module';
import { MongooseModule } from './../../test/mongooseModule'
import { ItemSchema, CategorySchema } from './interfaces';
import { getModelToken } from '@nestjs/mongoose';

const mongooseModule = MongooseModule.forFeature([
  { name: 'Item', schema: ItemSchema}, 
  { name: 'Category', schema: CategorySchema }
])

const itemModel = {}
const categoryModel = {}

describe('ItemsService', () => {
  let service: ItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MongooseModule],
      providers: [        { provide: getModelToken('Item'), useValue: itemModel},
      { provide: getModelToken('Category'), useValue: categoryModel},ItemsService],
    }).compile();

    service = module.get<ItemsService>(ItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
