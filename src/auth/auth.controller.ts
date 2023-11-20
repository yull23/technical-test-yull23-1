import { Body, Controller, Get, Post } from '@nestjs/common';
import { ActiveUser } from 'src/common/decorators/active-user.decorators';
import { LoginUserDeto } from 'src/common/dtos/login-user.dto';
import { ListRole } from 'src/common/enums/list-role.enum';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';
import { RegisterUserDto } from '../common/dtos/register-user.dto';
import { AuthService } from './auth.service';
import { Auth } from './decorators/auth.decorator';

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
  @Auth([ListRole.Admin, ListRole.Student])
  @Get('profile')
  profile(@ActiveUser() user: UserActiveInterface) {
    return { email: user.email };
    // return this.authService.profile(user.email);
  }
}
