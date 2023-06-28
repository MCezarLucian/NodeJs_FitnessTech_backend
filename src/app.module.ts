import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthenticationModule } from './authentication/authentication.module';
import { RolesGuard } from './roles/role.guards';
import { TrainingPlansModule } from './training_plans/training_plans.module';
import { DietModule } from './diet/diet.module';
import { EmailController } from './email-sender/email-sender.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { GroupModule } from './group/group.module';
import { CertificationController } from './certification/certification.controller';
import { CertificationModule } from './certification/certification.module';
import { SupportController } from './support/support.controller';
import { SupportModule } from './support/support.module';

@Module({
  imports: [
    UserModule,
    AuthenticationModule,
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com', // Update with your SMTP server\
        port: 465,
        secure: true,
        auth: {
          user: 'fitness.tech.web@gmail.com', // Update with your email address
          pass: 'qosqdvrrfanrymdu', // Update with your email password
        },
      },
    }),
    MongooseModule.forRoot(
      'mongodb+srv://cezarm20:cezar@fitnesstech.ykisdm6.mongodb.net/?retryWrites=true&w=majority',
    ),
    AuthenticationModule,
    TrainingPlansModule,
    DietModule,
    GroupModule,
    CertificationModule,
    SupportModule,
  ],
  controllers: [
    AppController,
    EmailController,
    CertificationController,
    SupportController,
  ],
  providers: [AppService, RolesGuard],
})
export class AppModule {}
