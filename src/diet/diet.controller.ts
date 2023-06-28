import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DietService } from './diet.service';
import { Diet } from './diet.model';
import { DietDTO } from './diet.dto';

@Controller('diet')
export class DietController {
  constructor(private dietService: DietService) {}

  @Get()
  findAll(): Promise<Diet[]> {
    return this.dietService.findAll();
  }

  @Post()
  createDiet(@Body() body: DietDTO): Promise<Diet> {
    return this.dietService.createDiet(body);
  }

  @Post('/:id')
  findById(@Param('id') id: string): Promise<Diet> {
    return this.dietService.findById(id);
  }

  @Post('/update/:id')
  updateDiet(@Param('id') id: string, @Body() body: DietDTO) {
    return this.dietService.updateDiet(id, body);
  }
}
