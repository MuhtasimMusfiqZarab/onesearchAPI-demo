import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType('Youtube')
export class YoutubeBasicType {
  @Field(() => Int)
  id: number;

  @Field()
  channel_name: string;

  @Field()
  joined: string;

  @Field()
  views: string;

  @Field()
  subscribers: string;
}
