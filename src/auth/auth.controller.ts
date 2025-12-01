import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('sayHi')
  sayHi(): string {
    return 'hello';
  }

  @Post('register')
  register() {
    return this.authService.register();
  }

  @Post('login')
  login() {
    return this.authService.login();
  }
}
