import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('create-teachers')
  getTeachers() {
    const teachers: string[] = Array.from(
      { length: 10 },
      (_, i) => `teacher${i + 1}`,
    );
    return this.usersService.createTeachers(teachers);
  }
}
