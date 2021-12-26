import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { YoutubeRepository } from './youtube.repository';
import { Youtube } from './youtube.entity';
import { ILike } from 'typeorm';
import { GetChannelsInput } from './input/get-channels.input';
import { isValidString } from '../utils/validation';
import { defaultOrder } from '../utils/query';
import { ChannelsType } from './types/channels.type';
import { CategoriesType } from './types/categories.type';
import { LocationsType } from './types/locations.type';

@Injectable()
export class YoutubeService {
  constructor(
    @InjectRepository(YoutubeRepository)
    private youtubeRepository: YoutubeRepository,
  ) {}

  async addYoutubeLeads(input: any): Promise<any> {
    try {
      return await this.youtubeRepository.save(input);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getChannelById(id: string): Promise<Youtube> {
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

  async getAllChannels(data: GetChannelsInput): Promise<any> {
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
        query = [{ ...query, channel_name: ILike(`%${searchText}%`) }];
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

  //get all categories
  async getChannelCategories(): Promise<CategoriesType> {
    const categories = await this.youtubeRepository
      .createQueryBuilder()
      .select('socialblade_category')
      .distinct(true)
      .getRawMany();

    const categoryNames = categories.map(
      category => category.socialblade_category,
    );

    return { categories: categoryNames, totalCount: categoryNames.length };
  }

  //get all categories
  async getChannelCountries(): Promise<LocationsType> {
    const locations = await this.youtubeRepository
      .createQueryBuilder()
      .select('location')
      .distinct(true)
      .getRawMany();

    const locationNames = locations.map(location => location.location);

    return { locations: locationNames, totalCount: locationNames.length };
  }
}
