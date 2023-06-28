import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Support, SupportDocument } from './support.model';
import { Model } from 'mongoose';
import { SupportDTO } from './support.dto';

@Injectable()
export class SupportRepository {
  constructor(
    @InjectModel(Support.name) private SupportModel: Model<SupportDocument>,
  ) {}

  async findAll(): Promise<Support[]> {
    return this.SupportModel.find().exec();
  }

  async createSupport(supportDTO: SupportDTO): Promise<Support> {
    const newSupport = new this.SupportModel(supportDTO);
    return newSupport.save();
  }

  async updateSupport(id: string, supportDTO: SupportDTO): Promise<Support> {
    return this.SupportModel.findOneAndUpdate({ _id: id }, supportDTO, {
      new: true,
    });
  }

  async deleteSupport(id: string): Promise<Support> {
    return this.SupportModel.findOneAndDelete({ _id: id });
  }
}
