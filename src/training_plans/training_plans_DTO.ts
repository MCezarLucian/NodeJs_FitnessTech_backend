import { SummaryTrainingPlans } from './summaryType';

export type trainingPlansDTO = {
  name: string;
  description: string;
  summary: SummaryTrainingPlans;
  exercises: string[];
};
