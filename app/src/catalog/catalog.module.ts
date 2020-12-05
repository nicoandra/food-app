import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema, CategorySchema } from './interfaces'
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';


const mongooseModule = MongooseModule.forFeature([
    { name: 'Item', schema: ItemSchema}, 
    { name: 'Category', schema: CategorySchema }
])

@Module({
    imports: [mongooseModule],
    providers: [ItemsService],
    controllers: [ItemsController],
})
export class CatalogModule {}
