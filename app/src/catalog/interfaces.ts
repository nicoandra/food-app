import * as mongoose from 'mongoose';

export class ItemCreateDTO {
    name: string
    description: string
    price: number
    enabled: boolean
}

export const CategorySchema = new mongoose.Schema({
    name: String, 
    description: String,
}, {useNestedStrict: true, strict: true})

export const ItemSchema = new mongoose.Schema({
    name: String, 
    description: String,
    price: Number,
    enabled: Boolean,
    categories: [CategorySchema]
}, {useNestedStrict: true, strict: true})

export interface Item {
    name: string,
    description: string
    price: number,
    enabled: boolean,
    categories: Category[]
}

export interface Category {
    name: string,
    description: string
}



