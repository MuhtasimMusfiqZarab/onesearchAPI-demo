import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YoutubeService } from './youtube.service';
import { YoutubeResolver } from './youtube.resolver';
import { YoutubeRepository } from './youtube.repository';

import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forFeature([YoutubeRepository]),
  ],
  providers: [YoutubeService, YoutubeResolver],
})
export class YoutubeModule {}
