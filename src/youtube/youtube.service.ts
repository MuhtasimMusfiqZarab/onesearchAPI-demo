import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { YoutubeRepository } from './youtube.repository';
import { Youtube } from './youtube.entity';
import { ILike } from 'typeorm';
import { YoutubeType } from './youtube.type';
import { GetChannelsInput } from './input/get-channels.input';
import { isValidString } from '../utils/validation';
import { defaultOrder } from '../utils/query';
import { ChannelsPayload } from './types/channels.type';

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

  /**
   * @Query getAllChannels
   * @param  data GetChannelsInput
   * @return YoutubeType
   */

  async getAllChannels(data: GetChannelsInput): Promise<ChannelsPayload> {
    const {
      socialblade_category,
      location,
      searchText,
      subscribers,
      offset,
      limit,
    } = data;

    try {
      let query: any = {};

      if (socialblade_category) query = { ...query, socialblade_category };
      if (location) query = { ...query, location };

      if (isValidString(searchText)) {
        query = [
          { ...query, channel_name: ILike(`%${searchText}%`) },
          { ...query, bio_email: ILike(`%${searchText}%`) },
        ];
      }

      const [channels, totalCount] = await this.youtubeRepository.findAndCount({
        where: query,
        order: { ...defaultOrder },
        skip: offset,
        take: limit,
      });

      if (!channels) {
        throw new NotFoundException(`No Channel found@!`);
      }

      return { channels, totalCount };
    } catch (error) {
      throw new Error(error);
    }
  }
}
