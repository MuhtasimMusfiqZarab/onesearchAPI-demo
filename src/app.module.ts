import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YoutubeModule } from './youtube/youtube.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { StripeModule } from './stripe/stripe.module';
import { join } from 'path';

import User from './users/user.entity';
import { Youtube } from './youtube/youtube.entity';
import { Subscription } from './subscriptions/subscription.entity';

import { ConfigModule } from '@nestjs/config';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';

const modules = [YoutubeModule, AuthModule, UsersModule, StripeModule];

@Module({
  imports: [
    ...modules,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      // defining the generated schema file name and location
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: false,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.USER_DB,
      entities: [User, Youtube, Subscription],
      synchronize: true,
    }),
    SubscriptionsModule,
  ],
})
export class AppModule {}
