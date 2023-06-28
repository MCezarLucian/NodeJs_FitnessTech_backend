import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SupportService } from './support.service';
import { Support } from './support.model';
import { SupportDTO } from './support.dto';

@Controller('support')
export class SupportController {
  constructor(private supportService: SupportService) {}

  @Get()
  findAll(): Promise<Support[]> {
    return this.supportService.findAll();
  }

  @Post()
  createSupport(@Body() body: SupportDTO): Promise<Support> {
    return this.supportService.createSupport(body);
  }

  @Post('/:id')
  deleteSupport(@Param('id') id: string): Promise<Support> {
    return this.supportService.deleteSupport(id);
  }
}
