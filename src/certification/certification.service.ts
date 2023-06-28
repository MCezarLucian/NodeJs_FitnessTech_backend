import { Injectable } from '@nestjs/common';
import { CertificationRepository } from './certification.repository';
import { Certification } from './certification.model';
import { CertificationDTO } from './certification.dto';

@Injectable()
export class CertificationService {
  constructor(private certificationRepository: CertificationRepository) {}

  findAll(): Promise<Certification[]> {
    return this.certificationRepository.findAll();
  }

  createCertification(
    certificationDTO: CertificationDTO,
  ): Promise<Certification> {
    return this.certificationRepository.createCertification(certificationDTO);
  }

  deleteCertification(id: string): Promise<Certification> {
    return this.certificationRepository.deleteCertification(id);
  }

  updateCertification(
    id: string,
    certificationDTO: CertificationDTO,
  ): Promise<Certification> {
    return this.certificationRepository.updateCertification(
      id,
      certificationDTO,
    );
  }
}
