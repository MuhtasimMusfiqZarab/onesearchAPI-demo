import { Args, Query, Resolver, Int, Mutation } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersType } from './types/users.type';
import CreateUserDto from './dto/create.user.dto';
import { UserType } from './user.type';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  //get user by id
  @Query(() => UserType, { nullable: true })
  async getUser(
    @Args('userId', { nullable: true }) userId: string,
  ): Promise<UserType | undefined> {
    return await this.usersService.findOne(userId);
  }

  //create user
  @Mutation(() => UserType)
  async createUser(
    @Args('input', { type: () => CreateUserDto }) input: CreateUserDto,
  ): Promise<UserType> {
    return await this.usersService.store(input);
  }
}
