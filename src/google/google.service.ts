import { Injectable, NotFoundException } from '@nestjs/common';
import { GoogleRepository } from './google.repository';
import { InjectRepository } from '@nestjs/typeorm';

import { isValidString } from '../utils/validation';
import { ILike } from 'typeorm';
import { defaultOrder } from '../utils/query';

import { GoogleBasicType, GoogleProfilesType } from './google.type';

import { BulkGoogleInput, GetGoogleInput } from './google.input';

@Injectable()
export class GoogleService {
  constructor(
    @InjectRepository(GoogleRepository)
    private googleRepository: GoogleRepository,
  ) {}

  //add google leads
  async addGoogleLeads(input: BulkGoogleInput[]): Promise<GoogleBasicType[]> {
    try {
      return await this.googleRepository.save(input);
    } catch (error) {
      throw new Error(error);
    }
  }

  //get all google profiles
  async getAllGoogleProfiles(
    data: GetGoogleInput,
  ): Promise<GoogleProfilesType> {
    const { category, country, searchText, offset, limit } = data;

    try {
      let query: any = {};

      if (category) query = { ...query, category };
      if (country) query = { ...query, country };

      if (isValidString(searchText)) {
        query = [{ ...query, company: ILike(`%${searchText}%`) }];
      }

      const [profiles, totalCount] = await this.googleRepository.findAndCount({
        where: query,
        // order: { ...defaultOrder },
        skip: offset,
        take: limit,
      });

      if (!profiles) {
        throw new NotFoundException(`No Profile was found@!`);
      }

      return { profiles, totalCount };
    } catch (error) {
      throw new Error(error);
    }
  }

  async getGoogleProfileById(id: string): Promise<GoogleBasicType | null> {
    const found = await this.googleRepository.findOne({ id });
    if (!found) {
      throw new NotFoundException(`Google Profile with id ${id} not found!`);
    }
    return found;
  }
}
