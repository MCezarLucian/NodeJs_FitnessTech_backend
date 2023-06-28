import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserHistory } from './userDTO';

export type userDocument = User & Document;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  height: number;

  @Prop()
  weight: number;

  @Prop()
  gender: string;

  @Prop()
  role: string;

  @Prop()
  problems: string[];

  @Prop()
  registrationDate: Date;

  @Prop()
  valid: boolean;

  @Prop()
  history: UserHistory[];

  @Prop()
  image: string;

  @Prop()
  confirmed: boolean;
}

export const userSchema = SchemaFactory.createForClass(User);
