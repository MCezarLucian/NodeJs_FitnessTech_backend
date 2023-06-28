import { Injectable } from '@nestjs/common';
import { Diet, DietDocument } from './diet.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DietDTO } from './diet.dto';

@Injectable()
export class DietRepository {
  constructor(
    @InjectModel(Diet.name)
    private DietModel: Model<DietDocument>,
  ) {}

  async findAll(): Promise<Diet[]> {
    return this.DietModel.find().exec();
  }

  async createDiet(dietDTO: DietDTO): Promise<Diet> {
    const newDiet = new this.DietModel(dietDTO);
    return newDiet.save();
  }

  async updateDiet(id: string, dietDTO: DietDTO): Promise<Diet> {
    return this.DietModel.findOneAndUpdate({ _id: id }, dietDTO, {
      new: true,
    });
  }

  async deleteDiet(name: string): Promise<Diet> {
    return this.DietModel.findOneAndDelete({ name: name });
  }

  async findById(id: string): Promise<Diet> {
    return this.DietModel.findById(id).exec();
  }
}
