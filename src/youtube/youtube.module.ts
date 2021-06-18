import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YoutubeService } from './youtube.service';
import { YoutubeResolver } from './youtube.resolver';
import { YoutubeRepository } from './youtube.repository';
import { configService } from '../config/config.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([YoutubeRepository]),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
  providers: [YoutubeService, YoutubeResolver],
})
export class YoutubeModule {}
