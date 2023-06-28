import { Controller, Post, Body } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('email')
export class EmailController {
  constructor(private readonly mailerService: MailerService) {}

  @Post()
  async sendEmail(
    @Body() emailData: { to: string; subject: string; text: string },
  ) {
    try {
      const { to, subject, text } = emailData;
      await this.mailerService.sendMail({
        to,
        subject,
        text,
      });
      return { message: 'Email sent successfully' };
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  }
}
