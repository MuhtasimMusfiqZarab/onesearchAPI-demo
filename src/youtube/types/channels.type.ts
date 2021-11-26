import { ObjectType, Field, Int } from '@nestjs/graphql';
import { YoutubeBasicType } from './youtube-basic.type';

@ObjectType()
export class ChannelsType {
  @Field(() => [YoutubeBasicType])
  channels: YoutubeBasicType[];

  @Field(() => Int)
  totalCount: number;
}
