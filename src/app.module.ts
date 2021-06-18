import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { YoutubeModule } from './youtube/youtube.module';
import { GoogleModule } from './google/google.module';

import { configService } from './config/config.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

const modules = [YoutubeModule, GoogleModule, AuthModule, UsersModule];

@Module({
  imports: [...modules, GraphQLModule.forRoot(configService.getGqlConfig())],
})
export class AppModule {}
