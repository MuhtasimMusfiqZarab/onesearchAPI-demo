/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserYoutubeRepository } from './user-youtube.repository';
import { ILike } from 'typeorm';

import { UserYoutubeInput } from './user-youtube.input';
import { UserYoutubeType } from './user-youtube.type';

@Injectable()
export class UserYoutubeService {
  constructor(
    @InjectRepository(UserYoutubeRepository)
    private userYoutubeRepository: UserYoutubeRepository,
  ) {}

  async unlockYoutubeLead(input: UserYoutubeInput[]): Promise<any> {
    try {
      return await this.userYoutubeRepository.save(input);
    } catch (error) {
      throw new Error(error);
    }
  }
}
