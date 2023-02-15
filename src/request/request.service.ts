/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestRepository } from './request.repository';
import { ILike } from 'typeorm';

import { GetRequestInput } from './request.input';
import { RequestsType, RequestType } from './request.type';

import { isValidString } from '../utils/validation';
import { defaultOrder } from '../utils/query';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(RequestRepository)
    private requestRepository: RequestRepository,
  ) {}

  async addRequest(input: any): Promise<RequestType> {
    try {
      const saved = await this.requestRepository.save(input);
      return saved;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getRequestById(id: string): Promise<RequestType | null> {
    const found = await this.requestRepository.findOne({ id });
    if (!found) {
      throw new NotFoundException(`youtube channel with id ${id} not found!`);
    }
    return found;
  }

  /**
   * @Query getAllrequests
   * @param  data GetrequestsInput
   * @return YoutubeType
   */

  async getAllRequests(data: GetRequestInput): Promise<RequestsType | null> {
    const { category, location, searchText, offset, limit } = data;

    try {
      let query: any = {};

      if (category) query = { ...query, category };
      if (location) query = { ...query, location };

      if (isValidString(searchText)) {
        query = [{ ...query, channel_name: ILike(`%${searchText}%`) }];
      }

      const [requests, totalCount] = await this.requestRepository.findAndCount({
        where: query,
        order: { ...defaultOrder },
        skip: offset,
        take: limit,
      });

      if (!requests) {
        throw new NotFoundException(`No Channel found@!`);
      }

      return { requests, totalCount };
    } catch (error) {
      throw new Error(error);
    }
  }

  // //get all categories
  // async getRequestCategories(): Promise<CategoriesType | null> {
  //   const categories = await this.requestRepository
  //     .createQueryBuilder()
  //     .select('socialblade_category')
  //     .distinct(true)
  //     .getRawMany();

  //   const categoryNames = categories.map(
  //     category => category.socialblade_category,
  //   );

  //   return {
  //     categories: categoryNames.filter(x => x !== null),
  //     totalCount: categoryNames.length,
  //   };
  // }

  // //get all categories
  // async getRequestType(): Promise<LocationsType | null> {
  //   const locations: any = await this.requestRepository
  //     .createQueryBuilder()
  //     .select('location')
  //     .distinct(true)
  //     .getRawMany();

  //   let locationNames = [];

  //   // console.log('This is it', locations.length);

  //   locationNames = locations.map(location => {
  //     if (location.location !== null || location.location !== undefined) {
  //       return location.location;
  //     } else {
  //       return;
  //     }
  //   });

  //   return {
  //     locations: locationNames.filter(x => x !== null),
  //     totalCount: locationNames.length,
  //   };
  // }
}
