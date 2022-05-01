import { Module } from '@nestjs/common';
import { AvailabilityResolver } from './availability.resolver';

@Module({
  providers: [AvailabilityResolver]
})
export class AvailabilityModule {}
