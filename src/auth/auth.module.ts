import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategy/google-strategy';
import { UserService } from '../users/users.service';

@Module({
  providers: [AuthService, GoogleStrategy, UserService],
  controllers: [AuthController],
  // imports: [UserService],
})
export class AuthModule {}
