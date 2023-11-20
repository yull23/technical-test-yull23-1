import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from '../common/dtos/register-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  register(registerUserDto: RegisterUserDto) {
    return this.userService.create(registerUserDto);
  }
}
