import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { YoutubeModule } from './youtube/youtube.module';
import { GoogleModule } from './google/google.module';

import { configService } from './config/config.service';
import { AuthModule } from './auth/auth.module';

const resolvers = [YoutubeModule, GoogleModule];

@Module({
  imports: [
    ...resolvers,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    GraphQLModule.forRoot(configService.getGqlConfig()),
    AuthModule,
  ],
})
export class AppModule {}
