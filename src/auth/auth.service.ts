import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { LoginUserDeto } from 'src/common/dtos/login-user.dto';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from '../common/dtos/register-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtServices: JwtService,
  ) {}

  async register(registerUserDto: RegisterUserDto) {
    const user = await this.userService.findOneByEmail(registerUserDto.email);
    if (user) {
      throw new BadRequestException('Email already exists');
    }
    return await this.userService.create({
      ...registerUserDto,
      password: await bcryptjs.hash(registerUserDto.password, 10),
    });
  }
  async login(loginUserDeto: LoginUserDeto) {
    const user = await this.userService.findByEmailWithPassword(
      loginUserDeto.email,
    );
    if (!user) {
      throw new UnauthorizedException('Email is wrong');
    }
    console.log(user);
    const isPasswordValid = await bcryptjs.compare(
      loginUserDeto.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Password invalid');
    }
    const payload = { email: user.email, role: user.role };
    const token = await this.jwtServices.signAsync(payload);
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      role: user.role,
      token,
    };
  }
}
