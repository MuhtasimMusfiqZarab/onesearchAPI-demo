import { Args, Query, Resolver, Int } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { YoutubeService } from './youtube.service';
import { ChannelsPayload } from './types/channels.type';
import { GetChannelsInput } from './input/get-channels.input';
import { YoutubeType } from './youtube.type';
import { CategoriesType } from './types/categories.type';
import { LocationsType } from './types/locations.type';

import { AuthGuard } from 'src/shared/guards/user.guard';
import { UseGuards } from '@nestjs/common';

import { AuthService } from '../auth/auth.service';

@Resolver(() => YoutubeType)
export class YoutubeResolver {
  constructor(
    private readonly youtubeService: YoutubeService,
    private readonly authService: AuthService,
  ) {}

  //get specific user
  @Query(() => YoutubeType, { nullable: true })
  async channel(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<YoutubeType> {
    const channel = await this.youtubeService.getChannelById(id);
    if (!channel) {
      throw new NotFoundException(id);
    }
    return channel;
  }
  //get all channels
  @UseGuards(AuthGuard)
  @Query(() => ChannelsPayload)
  async getAllChannels(
    @Args('data') data: GetChannelsInput,
  ): Promise<ChannelsPayload> {
    return await this.youtubeService.getAllChannels(data);
  }

  @Query(() => CategoriesType)
  async getAllCategories(): Promise<CategoriesType> {
    return await this.youtubeService.getChannelCategories();
  }

  @Query(() => LocationsType)
  async getChannelCountries(): Promise<LocationsType> {
    return await this.youtubeService.getChannelCountries();
  }
}
