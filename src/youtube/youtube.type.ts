import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ExtendedBaseEntity } from '../config/_base.entity';

@ObjectType()
export class YoutubeType extends ExtendedBaseEntity {
  @Field({ nullable: true })
  socialblade_category: string;

  @Field({ nullable: true })
  channel_url: string;

  @Field({ nullable: true })
  bio_email: string;
  @Field({ nullable: true })
  subscribers: number;
  @Field({ nullable: true })
  location: string;

  @Field({ nullable: true })
  channel_name: string;
  @Field({ nullable: true })
  timestamp: Date;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  instagram: string;

  @Field({ nullable: true })
  twitter: string;

  @Field({ nullable: true })
  facebook: string;

  @Field({ nullable: true })
  tiktok: string;

  @Field({ nullable: true })
  pinterest: string;

  @Field({ nullable: true })
  others: string;

  @Field({ nullable: true })
  joined: Date;

  @Field({ nullable: true })
  views: number;

  @Field({ nullable: true })
  socialblade_similar_scraped: string;
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
