import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TrainingPlans, trainingPlansDocument } from './training_plans.model';
import { Model } from 'mongoose';
import { trainingPlansDTO } from './training_plans_DTO';

@Injectable()
export class TrainingPlansRepository {
  constructor(
    @InjectModel(TrainingPlans.name)
    private trainingPlansModel: Model<trainingPlansDocument>,
  ) {}

  async findAll(): Promise<TrainingPlans[]> {
    return this.trainingPlansModel.find().exec();
  }

  async createTrainingPlan(
    trainingPlanDTO: trainingPlansDTO,
  ): Promise<TrainingPlans> {
    const newTrainingPlan = new this.trainingPlansModel(trainingPlanDTO);
    return newTrainingPlan.save();
  }

  async updateTrainingPlan(
    name: string,
    trainingPlanDTO: trainingPlansDTO,
  ): Promise<TrainingPlans> {
    return this.trainingPlansModel.findOneAndUpdate(
      { name: name },
      trainingPlanDTO,
      { new: true },
    );
  }

  async deleteTrainingPlan(name: string): Promise<TrainingPlans> {
    return this.trainingPlansModel.findOneAndDelete({ name: name });
  }
}
