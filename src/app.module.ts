import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { YoutubeModule } from './youtube/youtube.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { StripeModule } from './stripe/stripe.module';
import { join } from 'path';

import { ConfigModule } from '@nestjs/config';

const modules = [YoutubeModule, AuthModule, UsersModule, StripeModule];

@Module({
  // imports: [...modules, GraphQLModule.forRoot(configService.getGqlConfig())],
  imports: [
    ...modules,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      // defining the generated schema file name and location
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // sorting the schema lexicographically
      sortSchema: true,
      playground: true,
    }),
  ],
})
export class AppModule {}
