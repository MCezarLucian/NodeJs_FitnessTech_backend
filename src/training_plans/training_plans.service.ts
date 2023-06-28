import { Injectable } from '@nestjs/common';
import { TrainingPlansRepository } from './training_plans_repository';
import { TrainingPlans } from './training_plans.model';
import { trainingPlansDTO } from './training_plans_DTO';

@Injectable()
export class TrainingPlansService {
  constructor(private trainingPlansRepository: TrainingPlansRepository) {}

  findAll(): Promise<TrainingPlans[]> {
    return this.trainingPlansRepository.findAll();
  }

  createTrainingPlan(
    trainingPlanDTO: trainingPlansDTO,
  ): Promise<TrainingPlans> {
    return this.trainingPlansRepository.createTrainingPlan(trainingPlanDTO);
  }

  deleteTrainingPlan(name: string): Promise<TrainingPlans> {
    return this.trainingPlansRepository.deleteTrainingPlan(name);
  }
}
