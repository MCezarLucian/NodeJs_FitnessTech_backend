import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.model';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthenticationService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<Partial<User>> {
    const user = await this.userService.findUserByEmail(email);
    if (await bcrypt.compare(password, user.password)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // const { password, ...rest } = user;
      const usr = {
        username: user.username,
        role: user.role,
        confirmed: user.confirmed,
      };
      return usr;
    }
    return null;
  }

  async login(user: User) {
    return {
      acces_token: this.jwtService.sign(user, { expiresIn: '30m' }),
    };
  }
}
