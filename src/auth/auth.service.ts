import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

import * as dotenv from 'dotenv';

@Injectable()
export class AuthService {
  register() {
    return {
      message: 'User registered successfully',
    };
  }
  login() {
    return {
      message: 'Login successful',
    };
  }
}
