import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateSemesterDto } from './dto/create-semester.dto';
import { ListSemesters } from './enums/list-semesters.enum';
import { SemestersService } from './semesters.service';

@Controller('semesters')
export class SemestersController {
  constructor(private readonly semestersService: SemestersService) {}

  // @Auth([ListRole.Admin])
  @Post()
  create(@Body() createSemesterDto: CreateSemesterDto) {
    return this.semestersService.create(createSemesterDto);
  }
  @Get('create')
  createSemesters() {
    const semestersArray: string[] = Object.values(ListSemesters);
    return this.semestersService.createSemesters(semestersArray);
  }

  @Get()
  findAll() {
    return this.semestersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.semestersService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSemesterDto: UpdateSemesterDto) {
  //   return this.semestersService.update(+id, updateSemesterDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.semestersService.remove(+id);
  // }
}
