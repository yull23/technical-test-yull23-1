import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterUserDto } from 'src/common/dtos/register-user.dto';
import { ListFieldsUser } from 'src/common/enums/list-fields-user.enum';
import { ListRole } from 'src/common/enums/list-role.enum';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  create(createUserDto: RegisterUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }
  findByEmailWithPassword(email: string) {
    return this.userRepository.findOne({
      where: { email },
      select: [
        ListFieldsUser.Email,
        ListFieldsUser.Role,
        ListFieldsUser.FirstName,
        ListFieldsUser.LastName,
        ListFieldsUser.Password,
      ],
    });
  }

  async createTeachers(teachers: string[]) {
    const result = [];
    for (const teacher of teachers) {
      const existingTeacher = await this.findOneByEmail(teacher + '@mail.com');
      const teacherData = {
        firstName: teacher,
        lastName: teacher,
        email: teacher + '@mail.com',
        password: '123456',
        role: ListRole.Teacher,
      };
      if (!existingTeacher) {
        result.push(await this.userRepository.save(teacherData));
      }
    }
    return result;
  }
}
