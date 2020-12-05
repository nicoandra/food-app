import { Injectable } from '@nestjs/common';
import { Item, ItemCreateDTO } from './interfaces'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {

    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>){}

    create = async (itemCreateDto: ItemCreateDTO) : Promise<Item> => {
        const item = new this.itemModel(itemCreateDto);
        return item.save()
    }

    getAll = async () : Promise<[Item]> => {
        return this.itemModel.find({});
    }

    delete = async (deleteByIdDto: string) : Promise<Item> => {
        return this.itemModel.findById(deleteByIdDto).deleteMany();
    }    
}
