import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType('Youtube')
export class YoutubeType {
  @Field(() => Int)
  id: number;

  @Field()
  channel_url: string;

  @Field()
  channel_name: string;
}
