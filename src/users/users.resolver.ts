import { Args, Query, Resolver, Mutation, ID } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserType } from './user.type';
import { CreateUserInput } from './input/create-user.input';
import { UpdateUserInput } from './input/update-user.input';

@Resolver(() => UserType)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  //get specific user
  @Query(() => UserType)
  async user(@Args('id', { type: () => ID }) id: string): Promise<UserType> {
    const user = await this.usersService.getUserById(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }

  @Mutation(() => UserType)
  async createUser(
    @Args('data') createUserInput: CreateUserInput,
  ): Promise<UserType> {
    return this.usersService.createUser(createUserInput);
  }

  @Mutation(() => UserType)
  async updateUserFirstname(
    @Args('data') updateUserInput: UpdateUserInput,
  ): Promise<UserType> {
    return this.usersService.updateUser(updateUserInput);
  }
}
