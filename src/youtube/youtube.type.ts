import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ExtendedBaseEntity } from '../config/_base.entity';

@ObjectType()
export class YoutubeType extends ExtendedBaseEntity {
  @Field({ nullable: false })
  channel_url: string;
}

@ObjectType()
export class CategoriesType {
  @Field(() => [String])
  categories: string[];

  @Field(() => Int)
  totalCount: number;
}

@ObjectType()
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

@ObjectType()
export class ChannelsType {
  @Field(() => [YoutubeBasicType])
  channels: YoutubeBasicType[];

  @Field(() => Int)
  totalCount: number;
}

@ObjectType()
export class LocationsType {
  @Field(() => [String])
  locations: string[];

  @Field(() => Int)
  totalCount: number;
}
