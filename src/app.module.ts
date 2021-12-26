//npm modules
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { join } from 'path';

//custom modules
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { YoutubeModule } from './youtube/youtube.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { StripeModule } from './stripe/stripe.module';
import { LinkedinModule } from './linkedin/linkedin.module';
import { GoogleModule } from './google/google.module';

//entities
import User from './users/user.entity';
import { Youtube } from './youtube/youtube.entity';
import { Subscription } from './subscriptions/subscription.entity';
import Google from './google/google.entity';
import Linkedin from './linkedin/linkedin.entity';

//all the modules
const modules = [
  YoutubeModule,
  AuthModule,
  UsersModule,
  StripeModule,
  SubscriptionsModule,
  LinkedinModule,
  GoogleModule,
];

// all the entities
const entities = [User, Subscription, Google, Linkedin, Youtube];

@Module({
  imports: [
    ...modules,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
