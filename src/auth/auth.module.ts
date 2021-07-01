import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategy/google-strategy';
import { JwtStrategy } from './strategy/jwt-strategy';

import { UserService } from '../users/users.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      // signOptions: { expiresIn: '120s' },
    }),
  ],
  providers: [AuthService, GoogleStrategy, UserService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
