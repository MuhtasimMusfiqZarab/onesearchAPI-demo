import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YoutubeService } from './youtube.service';
import { YoutubeResolver } from './youtube.resolver';
import { YoutubeRepository } from './youtube.repository';

@Module({
  imports: [TypeOrmModule.forFeature([YoutubeRepository])],
  providers: [YoutubeService, YoutubeResolver],
})
export class YoutubeModule {}
