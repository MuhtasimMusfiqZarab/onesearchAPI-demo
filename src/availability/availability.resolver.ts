import { Resolver } from '@nestjs/graphql';

import { AvailabilityService } from './availability.service';

@Resolver()
export class AvailabilityResolver {
  constructor(private readonly availabilityService: AvailabilityService) {}
}
