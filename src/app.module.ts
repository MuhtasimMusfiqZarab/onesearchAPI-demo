import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { JobRoleModule } from './job-role/job-role.module';

@Module({
  imports: [
    //adding graphql into the mix
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    JobRoleModule,
  ],
})
export class AppModule {}
