import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterCourseDto } from 'src/common/dtos/register-course.dto';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}
  create(createCourseDto: RegisterCourseDto) {
    const courseCode = 'CODE' + createCourseDto.name.slice(0, 3) + 'COURSE';

    return this.courseRepository.save({ ...createCourseDto, courseCode });
  }

  // findAll() {
  //   return `This action returns all courses`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} course`;
  // }

  // update(id: number, updateCourseDto: UpdateCourseDto) {
  //   return `This action updates a #${id} course`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} course`;
  // }
}
