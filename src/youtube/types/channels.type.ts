import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Youtube } from '../youtube.entity';

@ObjectType()
export class ChannelsPayload {
  @Field(() => [Youtube])
  channels: Youtube[];

  @Field(() => Int)
  totalCount: number;
}
