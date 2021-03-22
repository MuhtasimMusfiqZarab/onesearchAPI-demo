import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { YoutubeRepository } from './youtube.repository';
import { Youtube } from './youtube.entity';
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
    const found = await this.youtubeRepository.find({
      // where: {
      //   bio_email: Like('%@%'),
      //   location: 'Bangladesh',
      //   socialblade_category: 'Travel',
      // },
      skip: 0,
      take: 100,
    });
    if (!found) {
      throw new NotFoundException(`No Channel found@!`);
    }
    return found;
  }
}
