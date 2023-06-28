import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SupportDocument = Support & Document;

@Schema()
export class Support {
  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  username: string;

  @Prop()
  date: Date;
}

export const SupportSchema = SchemaFactory.createForClass(Support);
