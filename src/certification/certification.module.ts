import { Module } from '@nestjs/common';
import { CertificationController } from './certification.controller';
import { CertificationService } from './certification.service';
import { CertificationRepository } from './certification.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Certification, CertificationSchema } from './certification.model';

@Module({
  controllers: [CertificationController],
  providers: [CertificationService, CertificationRepository],
  imports: [
    MongooseModule.forFeature([
      { name: Certification.name, schema: CertificationSchema },
    ]),
  ],
  exports: [CertificationService],
})
export class CertificationModule {}
