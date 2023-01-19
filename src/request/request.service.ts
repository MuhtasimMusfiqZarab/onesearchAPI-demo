/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { YoutubeRepository } from './request.repository';
import { ILike } from 'typeorm';

import { GetChannelsInput } from './request.input';
import {
  CategoriesType,
  LocationsType,
  ChannelsType,
  YoutubeBasicType,
} from './request.type';

import { isValidString } from '../utils/validation';
import { defaultOrder } from '../utils/query';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(YoutubeRepository)
    private youtubeRepository: YoutubeRepository,
  ) {}

  async addRequest(input: any): Promise<any> {
    try {
      return await this.youtubeRepository.save(input);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getRequestById(id: string): Promise<YoutubeBasicType | null> {
    const found = await this.youtubeRepository.findOne({ id });
    if (!found) {
      throw new NotFoundException(`youtube channel with id ${id} not found!`);
    }
    return found;
  }

  /**
   * @Query getAllChannels
   * @param  data GetChannelsInput
   * @return YoutubeType
   */

  async getAllRequests(data: GetChannelsInput): Promise<ChannelsType | null> {
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
  async getRequestCategories(): Promise<CategoriesType | null> {
    const categories = await this.youtubeRepository
      .createQueryBuilder()
      .select('socialblade_category')
      .distinct(true)
      .getRawMany();

    const categoryNames = categories.map(
      category => category.socialblade_category,
    );

    return {
      categories: categoryNames.filter(x => x !== null),
      totalCount: categoryNames.length,
    };
  }

  //get all categories
  async getRequestType(): Promise<LocationsType | null> {
    const locations: any = await this.youtubeRepository
      .createQueryBuilder()
      .select('location')
      .distinct(true)
      .getRawMany();

    let locationNames = [];

    // console.log('This is it', locations.length);

    locationNames = locations.map(location => {
      if (location.location !== null || location.location !== undefined) {
        return location.location;
      } else {
        return;
      }
    });

    return {
      locations: locationNames.filter(x => x !== null),
      totalCount: locationNames.length,
    };
  }
}
