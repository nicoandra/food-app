import { Test, TestingModule } from '@nestjs/testing';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { getModelToken } from '@nestjs/mongoose';
import { MongooseModule } from './../../test/mongooseModule'
import { ItemSchema, CategorySchema } from './interfaces';



const mongooseModule = MongooseModule.forFeature([
  { name: 'Item', schema: ItemSchema}, 
  { name: 'Category', schema: CategorySchema }
])

const itemModel = {}
const categoryModel = {}

describe('Items Controller', () => {
  let controller: ItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [ 
        { provide: getModelToken('Item'), useValue: itemModel},
        { provide: getModelToken('Category'), useValue: categoryModel},
        ItemsService
      ],
    }).compile();

    controller = module.get<ItemsController>(ItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
