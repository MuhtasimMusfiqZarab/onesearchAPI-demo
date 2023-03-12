import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserYoutubeResolver } from './user-youtube.resolver';
import { UserYoutubeService } from './user-youtube.service';
import { UserYoutubeRepository } from './user-youtube.repository';

import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/user/user.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forFeature([UserYoutubeRepository]),
  ],
  providers: [UserYoutubeResolver, UserYoutubeService],
})
export class UserYoutubeModule {}
