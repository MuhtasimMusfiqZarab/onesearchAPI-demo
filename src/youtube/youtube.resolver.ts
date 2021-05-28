import { Args, Query, Resolver, Int } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { YoutubeService } from './youtube.service';
import { ChannelsPayload } from './types/channels.type';
import { GetChannelsInput } from './input/get-channels.input';
import { YoutubeType } from './youtube.type';

@Resolver(() => YoutubeType)
export class YoutubeResolver {
  constructor(private readonly youtubeService: YoutubeService) {}

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
  @Query(() => ChannelsPayload)
  async getAllChannels(
    @Args('data') data: GetChannelsInput,
  ): Promise<ChannelsPayload> {
    return await this.youtubeService.getAllChannels(data);
  }
}
