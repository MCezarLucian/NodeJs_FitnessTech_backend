import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from 'src/user/user.model';

@Module({
  providers: [AuthenticationService, LocalStrategy, JwtStrategy],
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({ secret: jwtConstants.secret }),
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
  ],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
