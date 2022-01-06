import { Module } from '@nestjs/common';
import { YoutubeLocationResolver } from './youtube-location.resolver';
import { YoutubeLocationService } from './youtube-location.service';

@Module({
  providers: [YoutubeLocationResolver, YoutubeLocationService]
})
export class YoutubeLocationModule {}
