import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      console.log('User found:', user);
      console.log('Password valid:', isPasswordValid);

      if (isPasswordValid) {
        const { password, ...result } = user;
        return result;
      }
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUserByJwt(payload: { email: string }) {
    const user = await this.prisma.user.findUnique({ where: { email: payload.email } });
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
