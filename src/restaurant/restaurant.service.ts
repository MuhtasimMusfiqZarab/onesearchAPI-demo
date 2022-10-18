import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike } from 'typeorm';
import { RestaurantRepository } from './restaurant.repository';
import { AvailabilityService } from 'src/availability/availability.service';
import { GetRestaurantsInput } from './restaurant.input';
import { RestaurantsType } from './restaurant.type';
import { isValidString } from 'src/utils/validation';

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
        restaurant: saved[0],
        ...input[0],
      };

      const save = await this.availabilityService.addAvailability(object);
      return await this.restaurantRepository.save(restaurant);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllRestaurants(
    data: GetRestaurantsInput,
  ): Promise<RestaurantsType | null> {
    const { time, searchText, offset, limit } = data;

    try {
      let query: any = {};

      if (isValidString(searchText)) {
        query = [{ ...query, name: ILike(`%${searchText}%`) }];
      }

      const [
        restaurants,
        totalCount,
      ] = await this.restaurantRepository.findAndCount({
        where: query,
        relations: ['availabilities'],
        skip: offset,
        take: limit,
      });

      if (!restaurants) {
        throw new NotFoundException(`No Restaurant found@!`);
      }

      return { restaurants, totalCount };
    } catch (error) {
      throw new Error(error);
    }
  }
}
