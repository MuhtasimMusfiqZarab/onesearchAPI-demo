import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, Max } from 'class-validator';

@InputType()
export class BulkYoutubeInput {
  @Field()
  channel_url: string;
}

@InputType()
export class GetChannelsInput {
  @Field({ nullable: true })
  socialblade_category: string;

  @Field({ nullable: true })
  subscribers: string;

  @Field({ nullable: true })
  location: string;

  @Field({ nullable: true })
  searchText: string;

  @IsNotEmpty()
  @Field()
  offset: number;

  @IsNotEmpty()
  @Max(10)
  @Field()
  limit: number;
}
