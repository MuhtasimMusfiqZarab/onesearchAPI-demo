import { Args, Query, Resolver, Int, Mutation } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { YoutubeService } from './youtube.service';
import {
  CategoriesType,
  ChannelsType,
  YoutubeBasicType,
  LocationsType,
} from './youtube.type';

import { AuthGuard, AdminGuard } from 'src/shared/guards/user.guard';
import { UseGuards } from '@nestjs/common';

import { BulkYoutubeInput, GetChannelsInput } from './youtube.input';
import { YoutubeType } from './youtube.type';

@Resolver(() => YoutubeBasicType)
export class YoutubeResolver {
  constructor(private readonly youtubeService: YoutubeService) {}

  //add new lead
  @Mutation(() => [YoutubeType])
  @UseGuards(AdminGuard)
  async addYoutubeLeads(
    @Args('input', { type: () => [BulkYoutubeInput], nullable: false })
    input: BulkYoutubeInput[],
  ): Promise<YoutubeType[]> {
    return this.youtubeService.addYoutubeLeads(input);
  }

  //get specific user
  @UseGuards(AuthGuard)
  @Query(() => YoutubeBasicType, { nullable: true })
  async channel(@Args('id', { type: () => String }) id: string): Promise<any> {
    const channel = await this.youtubeService.getChannelById(id);
    if (!channel) {
      throw new NotFoundException(id);
    }
    return channel;
  }
  //get all channels
  @UseGuards(AuthGuard)
  @Query(() => ChannelsType, { nullable: true })
  async getAllChannels(
    @Args('data') data: GetChannelsInput,
  ): Promise<ChannelsType> {
    return await this.youtubeService.getAllChannels(data);
  }

  @UseGuards(AuthGuard)
  @Query(() => CategoriesType, { nullable: true })
  async getAllCategories(): Promise<CategoriesType> {
    return await this.youtubeService.getChannelCategories();
  }

  @UseGuards(AuthGuard)
  @Query(() => LocationsType, { nullable: true })
  async getChannelCountries(): Promise<LocationsType> {
    return await this.youtubeService.getChannelCountries();
  }
}
