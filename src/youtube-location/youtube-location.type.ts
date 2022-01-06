import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ExtendedBaseEntity } from '../config/_base.entity';

import { YoutubeType } from 'src/youtube/youtube.type';

export class YoutubeLocation extends ExtendedBaseEntity {
  @Field()
  country: string;

  @Field(() => [YoutubeType], { nullable: true })
  channels: YoutubeType[];
}
