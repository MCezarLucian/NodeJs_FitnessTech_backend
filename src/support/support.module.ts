import { Module } from '@nestjs/common';
import { SupportController } from './support.controller';
import { SupportService } from './support.service';
import { SupportRepository } from './support.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Support, SupportSchema } from './support.model';

@Module({
  controllers: [SupportController],
  providers: [SupportService, SupportRepository],
  imports: [
    MongooseModule.forFeature([{ name: Support.name, schema: SupportSchema }]),
  ],
  exports: [SupportService],
})
export class SupportModule {}
