import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { AvailabilityRepository } from './availability.repositoy';
import { GetRestaurantsInput } from './availability.input';
import { isValidString } from 'src/utils/validation';
import { ILike } from 'typeorm';

@Injectable()
export class AvailabilityService {
  constructor(
    @InjectRepository(AvailabilityRepository)
    private availabilityRepository: AvailabilityRepository,
  ) {}

  async addAvailability(input: any): Promise<void> {
    try {
      const restaurantAvailability = this.availabilityRepository.create(input);
      const saved = await this.availabilityRepository.save(
        restaurantAvailability,
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  // get restaurant availabilities
  async getAllRestaurants(data: GetRestaurantsInput): Promise<any | null> {
    const { time, searchText, offset, limit } = data;

    try {
      let query: any = {};
      if (isValidString(searchText)) {
        query = [{ ...query, name: ILike(`%${searchText}%`) }];
      }
      const [
        restaurants,
        totalCount,
      ] = await this.availabilityRepository.findAndCount({
        where: query,
        relations: ['restaurant'],
        skip: offset,
        take: limit,
      });

      console.log('Result', restaurants);

      if (!restaurants) {
        throw new NotFoundException(`No Restaurant found@!`);
      }

      return { restaurants, totalCount };
    } catch (error) {
      throw new Error(error);
    }
  }
}
