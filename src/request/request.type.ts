import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ExtendedBaseEntity } from '../config/_base.entity';
import User from 'src/user/user.entity';

@ObjectType()
export class RequestType extends ExtendedBaseEntity {
  @Field()
  userId: string;

  @Field({ nullable: true })
  platform: string;

  @Field({ nullable: true })
  category: string;

  @Field({ nullable: true })
  location: string;

  @Field({ nullable: true })
  datasize: string;

  @Field({ nullable: true })
  status: string;

  @Field({ nullable: true })
  description: string;
}

@ObjectType()
export class RequestsType {
  @Field(() => [RequestType], { nullable: true })
  requests: RequestType[];

  @Field(() => Int, { nullable: true })
  totalCount: number;
}

@ObjectType()
export class RequestStatusType {
  @Field(() => [String], { nullable: true })
  statuses: string[];

  @Field(() => Int, { nullable: true })
  totalCount: number;
}

@ObjectType()
export class RequestCountriesType {
  @Field(() => [String], { nullable: true })
  countries: string[];

  @Field(() => Int, { nullable: true })
  totalCount: number;
}

@ObjectType()
export class RequestPlatformsType {
  @Field(() => [String], { nullable: true })
  platforms: string[];

  @Field(() => Int, { nullable: true })
  totalCount: number;
}

@ObjectType()
export class RequestCategoriesType {
  @Field(() => [String], { nullable: true })
  categories: string[];

  @Field(() => Int, { nullable: true })
  totalCount: number;
}
