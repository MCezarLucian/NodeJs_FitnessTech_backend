import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, userDocument } from './user.model';
import { Model } from 'mongoose';
import { UserDTO } from './userDTO';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<userDocument>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async createUser(userDTO: UserDTO): Promise<User> {
    const newUser = new this.userModel(userDTO);
    newUser.password = await bcrypt.hash(newUser.password, 10);
    return newUser.save();
  }

  async updateUser(username: string, userDTO: UserDTO): Promise<User> {
    return this.userModel.findOneAndUpdate({ username: username }, userDTO, {
      new: true,
    });
  }

  async deleteUser(username: string): Promise<User> {
    return this.userModel.findOneAndDelete({ username: username });
  }

  async deleteUserByEmail(email: string): Promise<User> {
    return this.userModel.findOneAndDelete({ email: email });
  }

  async findUserByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email: email });
  }

  async findUserByUsername(username: string): Promise<User> {
    return this.userModel.findOne({ username: username });
  }

  async updateUserPassword(username: string, userDTO: UserDTO): Promise<User> {
    this.deleteUser(username);
    return this.createUser(userDTO);
  }

  async confirmUser(id: string, userDTO: UserDTO): Promise<User> {
    return this.userModel.findOneAndUpdate({ _id: id }, userDTO, {
      new: true,
    });
  }
}
