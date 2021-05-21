import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { JobRoleModule } from './job-role/job-role.module';
import { YoutubeModule } from './youtube/youtube.module';
import { AuthModule } from './auth/auth.module';
import { GoogleModule } from './google/google.module';

import { configService } from './config/config.service';

const resolvers = [
  UsersModule,
  JobRoleModule,
  YoutubeModule,
  AuthModule,
  GoogleModule,
];

@Module({
  imports: [
    ...resolvers,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    GraphQLModule.forRoot(configService.getGqlConfig()),
  ],
})
export class AppModule {}
