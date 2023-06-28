import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { menuIdea } from './diet.type';

export type DietDocument = Diet & Document;

@Schema()
export class Diet {
  @Prop()
  title: string;

  @Prop()
  type: string[];

  @Prop()
  imgSource: string;

  @Prop()
  miniDescription: string;

  @Prop()
  mainDescription: string;

  @Prop()
  howWork: string;

  @Prop()
  menuIdea: menuIdea;

  @Prop()
  shoppingIdeas: string[];
}

export const DietSchema = SchemaFactory.createForClass(Diet);
