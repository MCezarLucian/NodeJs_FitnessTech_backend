import { Injectable } from '@nestjs/common';
import { SupportRepository } from './support.repository';
import { Support } from './support.model';
import { SupportDTO } from './support.dto';

@Injectable()
export class SupportService {
  constructor(private supportRepository: SupportRepository) {}

  findAll(): Promise<Support[]> {
    return this.supportRepository.findAll();
  }

  createSupport(supportDTO: SupportDTO): Promise<Support> {
    return this.supportRepository.createSupport(supportDTO);
  }

  deleteSupport(id: string): Promise<Support> {
    return this.supportRepository.deleteSupport(id);
  }
}
