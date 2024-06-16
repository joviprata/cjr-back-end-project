import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TeacherService } from './professor.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.teacherService.findOne(id);
  }
}
