import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthenticationService } from './authentication.service';
import { User } from 'src/user/user.model';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationService: AuthenticationService) {
    super({ usernameField: 'email' });
  }

  async validate(
    email: string,
    passport: string,
  ): Promise<UnauthorizedException | Partial<User>> {
    const user = await this.authenticationService.validateUser(email, passport);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
