import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Message } from './group.type';

export type GroupDocument = Group & Document;

@Schema()
export class Group {
  @Prop()
  participants: string[];

  @Prop()
  messages: Message[];
}

export const GroupSchema = SchemaFactory.createForClass(Group);
