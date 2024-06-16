// src/app.module.ts
import { Module } from '@nestjs/common';
import { UserModule } from './Cadastro/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './Login/auth.module';

@Module({
  imports: [UserModule, PrismaModule, AuthModule],
})
export class AppModule {}
