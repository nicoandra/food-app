import { Controller, Post, Get, Body } from '@nestjs/common';
import { Item, ItemCreateDTO } from './interfaces';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService){}

    @Post('/')
    async create(@Body() payload: ItemCreateDTO): Promise<Item> {
        return this.itemsService.create(payload)
    }

    @Get('/')
    async get(): Promise<[Item]> {
        return this.itemsService.getAll()
    }    
}
