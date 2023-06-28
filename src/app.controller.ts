import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from './authentication/jwt-auth.guards';
import { AuthenticationService } from './authentication/authentication.service';
import { LocalAuthGuard } from './authentication/local-auth.guards';

@Controller()
export class AppController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() request) {
    const user = request.user;
    return this.authenticationService.login(user);
  }
}
