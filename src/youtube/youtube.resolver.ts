import { Args, Query, Resolver, Int } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { YoutubeService } from './youtube.service';
import { ChannelsType } from './types/channels.type';
import { GetChannelsInput } from './input/get-channels.input';
import { YoutubeBasicType } from './types/youtube-basic.type';
import { CategoriesType } from './types/categories.type';
import { LocationsType } from './types/locations.type';

import { AuthGuard } from 'src/shared/guards/user.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => YoutubeBasicType)
export class YoutubeResolver {
  constructor(private readonly youtubeService: YoutubeService) {}

  //get specific user
  @UseGuards(AuthGuard)
  @Query(() => YoutubeBasicType, { nullable: true })
  async channel(@Args('id', { type: () => Int }) id: number): Promise<any> {
    const channel = await this.youtubeService.getChannelById(id);
    if (!channel) {
      throw new NotFoundException(id);
    }
    return channel;
  }
  //get all channels
  @UseGuards(AuthGuard)
  @Query(() => ChannelsType)
  async getAllChannels(
    @Args('data') data: GetChannelsInput,
  ): Promise<ChannelsType> {
    return await this.youtubeService.getAllChannels(data);
  }

  @UseGuards(AuthGuard)
  @Query(() => CategoriesType)
  async getAllCategories(): Promise<CategoriesType> {
    return await this.youtubeService.getChannelCategories();
  }

  @UseGuards(AuthGuard)
  @Query(() => LocationsType)
  async getChannelCountries(): Promise<LocationsType> {
    return await this.youtubeService.getChannelCountries();
  }
}
