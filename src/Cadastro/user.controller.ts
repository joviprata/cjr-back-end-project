import { Controller, Post, Body, BadRequestException, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';

@Controller('user')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() userData: Prisma.UserCreateInput) {
    this.logger.log('Received user registration request', userData);

    const existingUser = await this.userService.findUserByEmail(userData.email);
    if (existingUser) {
      this.logger.warn('Email already in use:', userData.email);
      throw new BadRequestException('Email already in use');
    }
    const newUser = await this.userService.createUser(userData);
    this.logger.log('User created successfully', newUser);
    return newUser;
  }
}
