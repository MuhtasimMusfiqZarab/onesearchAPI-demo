import { Injectable, NotFoundException } from '@nestjs/common';
import { LinkedinRepository } from './linkedin.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { GetLinkedinProfileInput } from './linkedin.input';

import { isValidString } from '../utils/validation';
import { ILike } from 'typeorm';
import { defaultOrder } from '../utils/query';

@Injectable()
export class LinkedinService {
  constructor(
    @InjectRepository(LinkedinRepository)
    private linkedinRepository: LinkedinRepository,
  ) {}

  async addLinkedinLeads(input: any): Promise<any> {
    try {
      return await this.linkedinRepository.save(input);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllProfiles(data: GetLinkedinProfileInput): Promise<any> {
    const { title, location, searchText, offset, limit } = data;

    try {
      let query: any = {};

      if (title) query = { ...query, title };
      if (location) query = { ...query, location };

      if (isValidString(searchText)) {
        query = [{ ...query, channel_name: ILike(`%${searchText}%`) }];
      }

      const [profiles, totalCount] = await this.linkedinRepository.findAndCount(
        {
          where: query,
          order: { ...defaultOrder },
          skip: offset,
          take: limit,
        },
      );

      if (!profiles) {
        throw new NotFoundException(`No Profile was found@!`);
      }

      return { profiles, totalCount };
    } catch (error) {
      throw new Error(error);
    }
  }
}
