import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { YoutubeRepository } from './youtube.repository';
import { Youtube } from './youtube.entity';

@Injectable()
export class YoutubeService {
  constructor(
    @InjectRepository(YoutubeRepository)
    private youtubeRepository: YoutubeRepository,
  ) {}

  async getChannelById(id: number): Promise<Youtube> {
    const found = await this.youtubeRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`User with id ${id} not found!`);
    }
    return found;
  }
}
