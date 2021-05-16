import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { YoutubeRepository } from './youtube.repository';
import { Youtube } from './youtube.entity';
import { ChannelsPayload } from './types/channels.type';
import { Like } from 'typeorm';
@Injectable()
export class YoutubeService {
  constructor(
    @InjectRepository(YoutubeRepository)
    private youtubeRepository: YoutubeRepository,
  ) {}

  async getChannelById(id: number): Promise<Youtube> {
    const found = await this.youtubeRepository.findOne({ id });
    if (!found) {
      throw new NotFoundException(`User with id ${id} not found!`);
    }
    return found;
  }

  async getAllChannels(): Promise<Youtube[]> {
    const [channels, totalCount] = await this.youtubeRepository.findAndCount({
      where: {
        bio_email: Like('%@%'),
        socialblade_category: 'Music',
      },
      skip: 0,
      take: 5,
    });
    if (!channels) {
      throw new NotFoundException(`No Channel found@!`);
    }

    return channels;
  }
}
