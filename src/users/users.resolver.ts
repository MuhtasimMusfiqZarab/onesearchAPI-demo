import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserType } from './user.type';
import { RegistrationInput, GetUsersInput } from './user.input';
import { UserService } from './users.service';
import { GqlAuthGuard } from '../shared/guards/gql-auth.guard';
import { AdminGuard } from '../shared/guards/user.guard';
import { CurrentUser } from '../shared/decorators/current-user.decorator';
import { GetAllUsersType } from './user.type';

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

  //get the current user from session
  @Query(() => UserType)
  @UseGuards(GqlAuthGuard)
  currentUser(@CurrentUser() user: any) {
    return this.userService.findOne(user.userId);
  }
  //get all the users data
  @Query(() => GetAllUsersType)
  @UseGuards(AdminGuard)
  async getAllUsers(
    @Args('data') data: GetUsersInput,
  ): Promise<GetAllUsersType> {
    return await this.userService.getAllUsers(data);
  }
}
