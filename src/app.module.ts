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
import { UsersModule } from './user/user.module';
import { LinkedinModule } from './linkedin/linkedin.module';
import { GoogleModule } from './google/google.module';
import { ProfileModule } from './profile/profile.module';
import { PaymentModule } from './payment/payment.module';
import { RequestModule } from './request/request.module';
import { UserYoutubeModule } from './user-youtube/user-youtube.module';

//all the modules
const modules = [
  YoutubeModule,
  AuthModule,
  UsersModule,
  SubscriptionsModule,
  LinkedinModule,
  GoogleModule,
  ProfileModule,
  PaymentModule,
  RequestModule,
];

@Module({
  imports: [
    ...modules,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
    }),
    //get configuration data from ormconfig.js
    TypeOrmModule.forRoot(),
    UserYoutubeModule,
  ],
})
export class AppModule {}
