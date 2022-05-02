import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ExtendedBaseEntity } from '../config/_base.entity';
import Availability from 'src/availability/availability.entity';
import { AvailabilityType } from 'src/availability/availability.type';

@ObjectType()
export class RestaurantType extends ExtendedBaseEntity {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => [AvailabilityType])
  availabilities: AvailabilityType[];
}

@ObjectType()
export class RestaurantsType {
  @Field(() => [RestaurantType], { nullable: true })
  restaurants: RestaurantType[];

  @Field(() => Int, { nullable: true })
  totalCount: number;
}
