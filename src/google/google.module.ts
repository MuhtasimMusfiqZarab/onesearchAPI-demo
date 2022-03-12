import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GoogleRepository } from './google.repository';
import { GoogleResolver } from './google.resolver';
import { GoogleService } from './google.service';

import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../user/user.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forFeature([GoogleRepository]),
  ],
  providers: [GoogleService, GoogleResolver],
})
export class GoogleModule {}
