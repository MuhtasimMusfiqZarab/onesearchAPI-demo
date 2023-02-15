import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestType } from './request.type';

import { AuthGuard, AdminGuard } from 'src/shared/guards/user.guard';
import { UseGuards } from '@nestjs/common';
import { GetRequestInput, AddRequestInput } from './request.input';

@Resolver()
export class RequestResolver {
  constructor(private readonly requestService: RequestService) {}

  //add new lead
  @Mutation(() => RequestType)
  @UseGuards(AdminGuard)
  async addRequest(
    @Args('input', { type: () => [AddRequestInput], nullable: false })
    input: AddRequestInput[],
  ): Promise<RequestType> {
    return this.requestService.addRequest(input);
  }

  //get specific user
  @UseGuards(AuthGuard)
  @Query(() => RequestType, { nullable: true })
  async getRequest(
    @Args('id', { type: () => String }) id: string,
  ): Promise<RequestType | null> {
    const channel = await this.requestService.getRequestById(id);
    if (!channel) {
      throw new NotFoundException(id);
    }
    return null;
  }
  // //get all channels
  // @UseGuards(AuthGuard)
  // @Query(() => RequestType, { nullable: true })
  // async getAllRequests(
  //   @Args('data') data: GetRequestInput,
  // ): Promise<RequestType> {
  //   return await this.requestService.getAllRequests(data);
  // }
}
