//npm modules
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { join } from 'path';

//custom modules
import { RestaurantModule } from './restaurant/restaurant.module';
import { AvailabilityModule } from './availability/availability.module';

//all the modules
const modules = [RestaurantModule, AvailabilityModule];

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
  ],
})
export class AppModule {}
