import { UseGuards, Request } from '@nestjs/common';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import User from './user.entity';

import { RegistrationInput } from './input/user.input';

/**
 * call the services here
 */
import { UserService } from './users.service';

import { AuthGuard } from 'src/shared/guards/user.guard';

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

  @UseGuards(AuthGuard)
  @Query(() => User, { nullable: true })
  // @UseGuards(new JwtAuthGuard())
  async getProfile(@Request() req) {
    return req.user;
  }
}
