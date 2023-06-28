import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Certification, CertificationDocument } from './certification.model';
import { Model } from 'mongoose';
import { CertificationDTO } from './certification.dto';

@Injectable()
export class CertificationRepository {
  constructor(
    @InjectModel(Certification.name)
    private CertificationModel: Model<CertificationDocument>,
  ) {}

  async findAll(): Promise<Certification[]> {
    return this.CertificationModel.find().exec();
  }

  async createCertification(
    certification: CertificationDTO,
  ): Promise<Certification> {
    const newCertification = new this.CertificationModel(certification);
    return newCertification.save();
  }

  async updateCertification(
    id: string,
    certificationDTO: CertificationDTO,
  ): Promise<Certification> {
    return this.CertificationModel.findOneAndUpdate(
      { _id: id },
      certificationDTO,
      { new: true },
    );
  }

  async deleteCertification(id: string): Promise<Certification> {
    return this.CertificationModel.findOneAndDelete({ _id: id });
  }
}
