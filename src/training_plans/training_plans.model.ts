import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SummaryTrainingPlans } from './summaryType';

export type trainingPlansDocument = TrainingPlans & Document;

@Schema()
export class TrainingPlans {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  summary: SummaryTrainingPlans;

  @Prop()
  exercises: string[];
}

export const trainingPlansSchema = SchemaFactory.createForClass(TrainingPlans);
