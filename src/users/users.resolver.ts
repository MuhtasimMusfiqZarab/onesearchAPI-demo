import { ID, Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import User from './user.entity';
import { UserPayload } from './types/user.type';
import {
  RegistrationInput,
  GetUserArgs,
  BulkUserInput,
  UpdateUserInput,
} from './input/user.input';

/**
 * call the services here
 */
import { UserService } from './users.service';

@Resolver(() => User)
export default class UserResolver {
  constructor(private readonly userService: UserService) {}
  // @Query(() => User, { nullable: true })
  // async getUser(
  //   @Args('userId', { nullable: true }) userId: string,
  //   @Args('email', { nullable: true }) email: string,
  // ): Promise<User | undefined> {
  //   return await getUser(userId, email);
  // }

  // @Query(() => UserPayload)
  // async getUsers(@Args('data') data: GetUserArgs): Promise<UserPayload> {
  //   return await getUsers(data);
  // }

  // @Query(() => User, { nullable: true })
  // async getCurrentUser(
  //   @CurrentUser() reqUser: User,
  // ): Promise<User | undefined> {
  //   return await getCurrentUser(reqUser);
  // }

  @Mutation(() => User)
  async createUser(
    @Args('input', { type: () => RegistrationInput }) input: RegistrationInput,
  ): Promise<User> {
    return this.userService.createUser(input);
  }

  // @Mutation(() => [User])
  // async addUsers(
  //   @Args('input', { type: () => [BulkUserInput], nullable: false })
  //   input: BulkUserInput[],
  //   @CurrentUser() reqUser: User,
  // ): Promise<User[]> {
  //   return await addUsers(input, reqUser);
  // }

  // @Mutation(() => User)
  // async updateUserInfo(
  //   @Args('id', { type: () => ID }) id: string,
  //   @Args('input') input: UpdateUserInput,
  //   @CurrentUser() reqUser: User,
  // ): Promise<User> {
  //   return await updateUserInfo(id, input, reqUser);
  // }

  // @Mutation(() => User)
  // async disableUser(
  //   @Args('id', { type: () => ID }) id: string,
  //   @CurrentUser() reqUser: User,
  // ): Promise<User> {
  //   return await disableUser(id, reqUser);
  // }

  // @Mutation(() => User)
  // async reEnableUser(
  //   @Args('id', { type: () => ID }) id: string,
  //   @CurrentUser() reqUser: User,
  // ): Promise<User> {
  //   return await enableUser(id, reqUser);
  // }

  // @Mutation(() => Boolean)
  // async deleteUser(
  //   @Args('id', { type: () => ID }) id: string,
  // ): Promise<boolean> {
  //   return await deleteUser(id);
  // }
}
