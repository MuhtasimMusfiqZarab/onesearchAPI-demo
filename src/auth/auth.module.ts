import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategy/google-strategy';
import { UserService } from '../users/users.service';

@Module({
  providers: [AuthService, GoogleStrategy, UserService],
  controllers: [AuthController],
})
export class AuthModule {}
