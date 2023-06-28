import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user_repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './user.model';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
  ],
  exports: [UserService],
})
export class UserModule {}
