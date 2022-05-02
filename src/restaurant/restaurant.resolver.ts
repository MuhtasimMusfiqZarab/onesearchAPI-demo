import { Args, Query, Resolver, Int, Mutation } from '@nestjs/graphql';
import { RestaurantType } from './restaurant.type';
import { RestaurantService } from './restaurant.service';

import { BulkRestaurantInput } from './restaurant.input';

@Resolver(() => RestaurantType)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  //add new restaurant
  @Mutation(() => [RestaurantType])
  async addRestaurants(
    @Args('input', { type: () => [BulkRestaurantInput], nullable: false })
    input: BulkRestaurantInput[],
  ): Promise<RestaurantType[]> {
    return this.restaurantService.addRestaurants(input);
  }
}
