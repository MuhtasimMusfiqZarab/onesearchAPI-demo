import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, Max } from 'class-validator';

@InputType()
export class BulkGoogleInput {
  @Field({ nullable: true })
  company: string;

  @Field({ nullable: true })
  category: string;

  @Field({ nullable: true })
  rating: string;

  @Field({ nullable: true })
  phone: string;

  @Field({ nullable: true })
  postcode: string;

  @Field({ nullable: true })
  country: string;

  @Field({ nullable: true })
  city: string;

  @Field({ nullable: true })
  state: string;

  @Field({ nullable: true })
  latitude: string;

  @Field({ nullable: true })
  longitude: string;

  @Field({ nullable: true })
  website: string;

  @Field({ nullable: true })
  claim_status: string;

  @Field({ nullable: true })
  total_reviews: string;

  @Field({ nullable: true })
  review_data: string;

  @Field({ nullable: true })
  gmaps_url: string;

  @Field({ nullable: true })
  timestamp: Date;
}

@InputType()
export class GetGoogleInput {
  @Field({ nullable: true })
  category: string;

  @Field({ nullable: true })
  country: string;

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
