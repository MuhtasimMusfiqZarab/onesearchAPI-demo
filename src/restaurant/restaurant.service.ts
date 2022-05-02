import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { RestaurantRepository } from './restaurant.repository';
import { AvailabilityService } from 'src/availability/availability.service';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(RestaurantRepository)
    private restaurantRepository: RestaurantRepository,
    private availabilityService: AvailabilityService,
  ) {}

  //add the restaurats to the DB
  async addRestaurants(input: any): Promise<any> {
    try {
      const restaurant = this.restaurantRepository.create(input);
      const saved: any = await this.restaurantRepository.save(restaurant);

      const object = {
        restaurantId: saved[0].id,
        ...input[0],
      };

      const save = await this.availabilityService.addAvailability(object);
      return await this.restaurantRepository.save(restaurant);
    } catch (error) {
      throw new Error(error);
    }
  }
}
