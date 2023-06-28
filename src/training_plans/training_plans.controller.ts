import { Body, Controller, Get, Post } from '@nestjs/common';
import { TrainingPlansService } from './training_plans.service';
import { TrainingPlans } from './training_plans.model';
import { trainingPlansDTO } from './training_plans_DTO';

@Controller('training-plans')
export class TrainingPlansController {
  constructor(private trainingPlansService: TrainingPlansService) {}

  @Get()
  findAll(): Promise<TrainingPlans[]> {
    return this.trainingPlansService.findAll();
  }

  @Post()
  createTrainingPlan(@Body() body: trainingPlansDTO): Promise<TrainingPlans> {
    return this.trainingPlansService.createTrainingPlan(body);
  }
}
