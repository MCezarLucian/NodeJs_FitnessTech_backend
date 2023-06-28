import { Module } from '@nestjs/common';
import { DietController } from './diet.controller';
import { DietService } from './diet.service';
import { DietRepository } from './diet.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Diet, DietSchema } from './diet.model';

@Module({
  controllers: [DietController],
  providers: [DietService, DietRepository],
  imports: [
    MongooseModule.forFeature([{ name: Diet.name, schema: DietSchema }]),
  ],
  exports: [DietService],
})
export class DietModule {}
