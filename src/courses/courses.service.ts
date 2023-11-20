import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeachersService } from 'src/teachers/teachers.service';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    private readonly teacherService: TeachersService,
  ) {}
  async create(createCourseDto: CreateCourseDto) {
    const courseCode =
      'CODE' + createCourseDto.name.split(' ').join('') + 'COURSE';
    const teacher = await this.teacherService.findByCode(
      createCourseDto.teacherCode,
    );
    return this.courseRepository.save({
      ...createCourseDto,
      courseCode,
      teacher,
    });
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
