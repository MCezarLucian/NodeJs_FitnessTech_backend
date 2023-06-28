import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Group, GroupDocument } from './group.model';
import { Model } from 'mongoose';
import { GroupDTO } from './group.type';

@Injectable()
export class GroupRepository {
  constructor(
    @InjectModel(Group.name) private GroupModel: Model<GroupDocument>,
  ) {}

  async findAll(): Promise<Group[]> {
    return this.GroupModel.find().exec();
  }

  async createGroup(groupDTO: GroupDTO): Promise<Group> {
    const newGroup = new this.GroupModel(groupDTO);
    return newGroup.save();
  }

  async updateGroup(id: string, groupDTO: GroupDTO): Promise<Group> {
    return this.GroupModel.findOneAndUpdate({ _id: id }, groupDTO);
  }

  async deleteGroup(id: string): Promise<Group> {
    return this.GroupModel.findOneAndDelete({ _id: id });
  }

  async findById(id: string): Promise<Group> {
    return this.GroupModel.findOne({ _id: id });
  }
}
