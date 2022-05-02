import { Args, Query, Resolver, Int, Mutation } from '@nestjs/graphql';
import { RestaurantType, RestaurantsType } from './restaurant.type';
import { RestaurantService } from './restaurant.service';

import { BulkRestaurantInput, GetRestaurantsInput } from './restaurant.input';

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

  //get all the restaurants with specific search field
  @Query(() => RestaurantsType, { nullable: true })
  async getAllRestaurants(
    @Args('data') data: GetRestaurantsInput,
  ): Promise<RestaurantsType> {
    return await this.restaurantService.getAllRestaurants(data);
  }
}
