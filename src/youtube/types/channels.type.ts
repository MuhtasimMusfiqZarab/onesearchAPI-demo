import { ObjectType, Field, Int } from '@nestjs/graphql';
import { YoutubeType } from '../youtube.type';

@ObjectType()
export class ChannelsPayload {
  @Field(() => [YoutubeType])
  channels: YoutubeType[];

  @Field(() => Int)
  totalCount: number;
}
