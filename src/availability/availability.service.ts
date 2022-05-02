import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { AvailabilityRepository } from './availability.repositoy';

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
      console.log('THis is saved availability', saved);
    } catch (error) {
      throw new Error(error);
    }
  }
}
