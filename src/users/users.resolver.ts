import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserType } from './user.type';
import { RegistrationInput } from './user.input';
import { UserService } from './users.service';
import { GqlAuthGuard } from '../shared/guards/gql-auth.guard';
import { CurrentUser } from '../shared/decorators/current-user.decorator';

@Resolver(() => UserType)
export default class UserResolver {
  constructor(private readonly userService: UserService) {}

  //create the user
  @Mutation(() => UserType)
  async createUser(
    @Args('input', { type: () => RegistrationInput }) input: RegistrationInput,
  ): Promise<UserType> {
    return this.userService.createUser(input);
  }

  //get all the user data from DB using session
  @Query(() => UserType)
  @UseGuards(GqlAuthGuard)
  currentUser(@CurrentUser() user: any) {
    return this.userService.findOne(user.userId);
  }
}
