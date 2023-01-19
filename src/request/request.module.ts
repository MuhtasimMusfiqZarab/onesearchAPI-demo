import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestResolver } from './request.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YoutubeRepository } from './request.repository';

import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../user/user.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forFeature([YoutubeRepository]),
  ],
  providers: [RequestService, RequestResolver],
})
export class RequestModule {}
