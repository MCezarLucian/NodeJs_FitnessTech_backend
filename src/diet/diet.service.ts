import { Injectable } from '@nestjs/common';
import { DietRepository } from './diet.repository';
import { Diet } from './diet.model';
import { DietDTO } from './diet.dto';

@Injectable()
export class DietService {
  constructor(private dietRepository: DietRepository) {}

  findAll(): Promise<Diet[]> {
    return this.dietRepository.findAll();
  }

  createDiet(dietDTO: DietDTO): Promise<Diet> {
    return this.dietRepository.createDiet(dietDTO);
  }

  deleteDiet(name: string): Promise<Diet> {
    return this.dietRepository.deleteDiet(name);
  }

  findById(id: string): Promise<Diet> {
    return this.dietRepository.findById(id);
  }

  updateDiet(id: string, dietDTO: DietDTO): Promise<Diet> {
    return this.dietRepository.updateDiet(id, dietDTO);
  }
}
