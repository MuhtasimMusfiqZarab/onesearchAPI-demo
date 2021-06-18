import { Args, Query, Resolver, Int, Mutation } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersType } from './types/users.type';
import CreateUserInput from './input/create-user.input';
import { UserType } from './user.type';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => UserType, { nullable: true })
  async getUser(
    @Args('userId', { nullable: true }) userId: string,
  ): Promise<UserType | undefined> {
    return await this.usersService.findOne(userId);
  }

  @Mutation(() => UserType)
  async createUser(
    @Args('input', { type: () => CreateUserInput }) input: CreateUserInput,
  ): Promise<UserType> {
    console.log('This is input', input);
    return await this.usersService.store(input);
  }
}
