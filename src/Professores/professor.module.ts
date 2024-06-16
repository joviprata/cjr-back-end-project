import { Module } from '@nestjs/common';
import { TeacherService } from './professor.service';
import { TeacherController } from './professor.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
