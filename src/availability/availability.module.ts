import { Module, forwardRef } from '@nestjs/common';
import { AvailabilityResolver } from './availability.resolver';
import { AvailabilityRepository } from './availability.repositoy';
import { RestaurantModule } from 'src/restaurant/restaurant.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvailabilityService } from './availability.service';

@Module({
  imports: [
    forwardRef(() => RestaurantModule),
    TypeOrmModule.forFeature([AvailabilityRepository]),
  ],
  providers: [AvailabilityResolver, AvailabilityService],
  exports: [AvailabilityService],
})
export class AvailabilityModule {}
