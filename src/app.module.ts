import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig, typeOrmConfig1 } from './config/typeorm.config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { JobRoleModule } from './job-role/job-role.module';
import { YoutubeModule } from './youtube/youtube.module';
import { AuthModule } from './auth/auth.module';
import { GoogleModule } from './google/google.module';

//load the environment variables
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    //for environmennt variables
    ConfigModule.forRoot({ isGlobal: true }),

    //adding graphql into the mix
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forRoot(typeOrmConfig1),

    UsersModule,
    JobRoleModule,
    YoutubeModule,
    AuthModule,
    GoogleModule,
  ],
})
export class AppModule {}
