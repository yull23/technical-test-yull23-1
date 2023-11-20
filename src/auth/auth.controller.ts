import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserDto } from '../common/dtos/register-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authServices: AuthService) {}
  @Post()
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.authServices.register(registerUserDto);
  }
}
