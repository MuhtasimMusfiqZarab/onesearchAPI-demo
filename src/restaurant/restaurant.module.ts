import { Module, forwardRef } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantResolver } from './restaurant.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantRepository } from './restaurant.repository';
import { AvailabilityRepository } from 'src/availability/availability.repositoy';
import { AvailabilityModule } from 'src/availability/availability.module';

@Module({
  imports: [
    forwardRef(() => AvailabilityModule),
    TypeOrmModule.forFeature([RestaurantRepository, AvailabilityRepository]),
  ],
  providers: [RestaurantService, RestaurantResolver],
})
export class RestaurantModule {}
