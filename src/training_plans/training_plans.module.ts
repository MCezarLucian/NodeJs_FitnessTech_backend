import { Module } from '@nestjs/common';
import { TrainingPlansController } from './training_plans.controller';
import { TrainingPlansService } from './training_plans.service';
import { TrainingPlansRepository } from './training_plans_repository';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainingPlans, trainingPlansSchema } from './training_plans.model';

@Module({
  controllers: [TrainingPlansController],
  providers: [TrainingPlansService, TrainingPlansRepository],
  imports: [
    MongooseModule.forFeature([
      { name: TrainingPlans.name, schema: trainingPlansSchema },
    ]),
  ],
  exports: [TrainingPlansService],
})
export class TrainingPlansModule {}
