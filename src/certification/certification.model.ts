import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CertificationDocument = Certification & Document;

@Schema()
export class Certification {
  @Prop()
  aboutYou: string;

  @Prop()
  role: string;

  @Prop()
  certificate: string;

  @Prop()
  idImage: string;

  @Prop()
  username: string;
}

export const CertificationSchema = SchemaFactory.createForClass(Certification);
