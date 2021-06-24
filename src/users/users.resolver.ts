import { Resolver, Mutation, Args } from '@nestjs/graphql';
import User from './user.entity';

import { RegistrationInput } from './input/user.input';

/**
 * call the services here
 */
import { UserService } from './users.service';

@Resolver(() => User)
export default class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(
    @Args('input', { type: () => RegistrationInput }) input: RegistrationInput,
  ): Promise<User> {
    return this.userService.createUser(input);
  }
}
