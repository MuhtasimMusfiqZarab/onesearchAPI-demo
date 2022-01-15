import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ExtendedBaseEntity } from '../config/_base.entity';

@ObjectType()
export class YoutubeType extends ExtendedBaseEntity {
  @Field({ nullable: true })
  socialblade_category: string;

  @Field()
  channel_url: string;

  @Field(() => [String], { nullable: true })
  bio_email: string[];

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
  joined: string;

  @Field({ nullable: true })
  views: string;
}

@ObjectType()
export class CategoriesType {
  @Field(() => [String], { nullable: true })
  categories: string[];

  @Field(() => Int, { nullable: true })
  totalCount: number;
}

@ObjectType()
export class YoutubeBasicType {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  channel_name: string;

  @Field({ nullable: true })
  joined: string;

  @Field({ nullable: true })
  views: string;

  @Field({ nullable: true })
  subscribers: number;

  @Field({ nullable: true })
  socialblade_category: string;

  @Field({ nullable: true })
  location: string;

  @Field({ nullable: true })
  description: string;
}

@ObjectType()
export class ChannelsType {
  @Field(() => [YoutubeBasicType], { nullable: true })
  channels: YoutubeBasicType[];

  @Field(() => Int, { nullable: true })
  totalCount: number;
}

@ObjectType()
export class LocationsType {
  @Field(() => [String], { nullable: true })
  locations: string[];

  @Field(() => Int, { nullable: true })
  totalCount: number;
}
