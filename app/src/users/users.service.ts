import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { UserDto } from './dto/user.dto'

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}
  
  create(createUserDto: CreateUserDto) {
    const user = new this.userModel(createUserDto)
    return user.save()
  }

  async findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id: string) : Promise<UserDto> {
    return this.userModel.findById(id).exec();
  }

  async findByName(name: string) : Promise<User> {
    return this.userModel.findOne({name}).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
