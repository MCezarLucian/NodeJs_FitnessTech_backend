import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CertificationService } from './certification.service';
import { Certification } from './certification.model';
import { CertificationDTO } from './certification.dto';

@Controller('certification')
export class CertificationController {
  constructor(private certificationService: CertificationService) {}

  @Get()
  findAll(): Promise<Certification[]> {
    return this.certificationService.findAll();
  }

  @Post()
  createCertification(@Body() body: CertificationDTO): Promise<Certification> {
    return this.certificationService.createCertification(body);
  }

  @Post('/update/:id')
  updateCertification(
    @Param('id') id: string,
    @Body() body: CertificationDTO,
  ): Promise<Certification> {
    return this.certificationService.updateCertification(id, body);
  }

  @Post('/delete/:id')
  deleteCertification(@Param('id') id: string): Promise<Certification> {
    return this.certificationService.deleteCertification(id);
  }
}
