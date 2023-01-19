import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { RequestService } from './request.service';
import { ChannelsType, YoutubeBasicType } from './request.type';

import { AuthGuard, AdminGuard } from 'src/shared/guards/user.guard';
import { UseGuards } from '@nestjs/common';
import { BulkYoutubeInput, GetChannelsInput } from './request.input';
import { YoutubeType } from './request.type';

@Resolver()
export class RequestResolver {
  constructor(private readonly youtubeService: RequestService) {}

  //add new lead
  @Mutation(() => [YoutubeType])
  @UseGuards(AdminGuard)
  async addRequest(
    @Args('input', { type: () => [BulkYoutubeInput], nullable: false })
    input: BulkYoutubeInput[],
  ): Promise<YoutubeType[]> {
    return this.youtubeService.addRequest(input);
  }

  //get specific user
  @UseGuards(AuthGuard)
  @Query(() => YoutubeBasicType, { nullable: true })
  async getRequest(
    @Args('id', { type: () => String }) id: string,
  ): Promise<YoutubeBasicType | null> {
    const channel = await this.youtubeService.getRequestById(id);
    if (!channel) {
      throw new NotFoundException(id);
    }
    return channel;
  }
  //get all channels
  @UseGuards(AuthGuard)
  @Query(() => ChannelsType, { nullable: true })
  async getAllRequests(
    @Args('data') data: GetChannelsInput,
  ): Promise<ChannelsType> {
    return await this.youtubeService.getAllRequests(data);
  }
}
