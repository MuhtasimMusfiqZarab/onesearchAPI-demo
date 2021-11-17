import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import User from './user.entity';
import { RegistrationInput } from './input/user.input';
import { UserService } from './users.service';
import { GqlAuthGuard } from '../shared/guards/gql-auth.guard';
import { CurrentUser } from '../shared/decorators/current-user.decorator';

@Resolver(() => User)
export default class UserResolver {
  constructor(private readonly userService: UserService) {}

  //create the user
  @Mutation(() => User)
  async createUser(
    @Args('input', { type: () => RegistrationInput }) input: RegistrationInput,
  ): Promise<User> {
    return this.userService.createUser(input);
  }

  //get all the user data from DB using session
  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  currentUser(@CurrentUser() user: any) {
    return this.userService.findOne(user.userId);
  }
}
