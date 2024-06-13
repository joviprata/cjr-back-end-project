// src/app.module.ts
import { Module } from '@nestjs/common';
import { TeacherModule } from './Professores/professor.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TeacherModule, PrismaModule],
})
export class AppModule {}
