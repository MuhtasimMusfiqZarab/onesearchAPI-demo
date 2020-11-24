import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType('Youtube')
export class YoutubeType {
  @Field(() => Int)
  id: number;

  @Field()
  socialblade_category: string;

  @Field()
  channel_url: string;

  @Field()
  bio_email: string;

  @Field()
  subscribers: string;

  @Field()
  location: string;

  @Field()
  channel_name: string;

  @Field()
  timestamp: Date;

  @Field()
  description: string;

  @Field()
  instagram: string;

  @Field()
  twitter: string;

  @Field()
  facebook: string;

  @Field()
  tiktok: string;

  @Field()
  pinterest: string;

  @Field()
  others: string;

  @Field()
  joined: string;

  @Field()
  views: string;

  @Field()
  socialblade_similar_scraped: string;
}
