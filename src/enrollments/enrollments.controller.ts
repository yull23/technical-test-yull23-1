import { Controller } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';

@Controller('enrollments')
export class EnrollmentsController {
  constructor(private readonly enrollmentsService: EnrollmentsService) {}

  // @Post()
  // create(@Body() createEnrollmentDto: CreateEnrollmentDto) {
  //   return this.enrollmentsService.create(createEnrollmentDto);
  // }

  // @Get()
  // findAll() {
  //   return this.enrollmentsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.enrollmentsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEnrollmentDto: UpdateEnrollmentDto) {
  //   return this.enrollmentsService.update(+id, updateEnrollmentDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.enrollmentsService.remove(+id);
  // }
}
