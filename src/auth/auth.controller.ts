import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDeto } from 'src/common/dtos/login-user.dto';
import { RegisterUserDto } from '../common/dtos/register-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authServices: AuthService) {}
  @Post('register')
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.authServices.register(registerUserDto);
  }
  @Post('login')
  login(@Body() loginUserDeto: LoginUserDeto) {
    return this.authServices.login(loginUserDeto);
  }
}
