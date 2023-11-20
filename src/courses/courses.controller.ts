import { Body, Controller, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { AssignTeacherDto } from './dto/assgin-teacher';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  // @Post()
  // create(@Body() createCourseDto: CreateCourseDto) {
  //   return this.coursesService.create(createCourseDto);
  // }

  // @Get()
  // findAll() {
  //   return this.coursesService.findAll();
  // }

  // @Auth([ListRole.Admin])
  // @Get(':id')
  // findOne(@Param('id') id: number) {
  //   return this.coursesService.findOne(id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
  //   return this.coursesService.update(+id, updateCourseDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.coursesService.remove(+id);
  // }
  // @Auth([ListRole.Admin])
  @Post()
  createCourse(@Body() registerCourseDto: CreateCourseDto) {
    return this.coursesService.create(registerCourseDto);
  }
  @Post('assign')
  assignTeacher(@Body() assingCourseDto: AssignTeacherDto) {
    return this.coursesService.assignTeacher(assingCourseDto);
  }
}
