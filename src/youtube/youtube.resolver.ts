import { Args, Query, Resolver, Int } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { YoutubeService } from './youtube.service';
import { YoutubeType } from './youtube.type';

@Resolver()
export class YoutubeResolver {
  constructor(private readonly youtubeService: YoutubeService) {}

  //get specific user
  @Query(() => YoutubeType)
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
  @Query(() => [YoutubeType])
  async channels(): Promise<YoutubeType[]> {
    const channel = await this.youtubeService.getAllChannels();
    if (!channel) {
      throw new NotFoundException('No Channel found@!');
    }
    return channel;
  }
}
