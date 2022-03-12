import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ExtendedBaseEntity } from '../config/_base.entity';

@ObjectType()
export class GoogleBasicType {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  company: string;

  @Field({ nullable: true })
  rating: string;

  @Field({ nullable: true })
  category: string;

  @Field({ nullable: true })
  country: string;

  @Field({ nullable: true })
  claim_status: string;

  @Field({ nullable: true })
  total_reviews: string;
}

@ObjectType()
export class GoogleAdvancedType extends ExtendedBaseEntity {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  query_parameter: string;

  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  phone: string;

  @Field({ nullable: true })
  website: string;

  @Field({ nullable: true })
  street: string;

  @Field({ nullable: true })
  city: string;

  @Field({ nullable: true })
  postcode: string;

  @Field({ nullable: true })
  review_data: string;

  @Field({ nullable: true })
  gmaps_url: string;

  @Field({ nullable: true })
  timestamp: Date;
}

@ObjectType()
export class GoogleType {
  @Field(() => [GoogleBasicType], { nullable: true })
  profiles: GoogleBasicType[];

  @Field(() => Int, { nullable: true })
  totalCount: number;
}
