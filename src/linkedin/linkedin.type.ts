import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ExtendedBaseEntity } from '../config/_base.entity';

import { UserType } from 'src/user/user.type';

@ObjectType()
export class LinkedinBasicType extends ExtendedBaseEntity {
  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  fullName: string;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  company: string;

  @Field({ nullable: true })
  location: string;

  @Field(() => [UserType], { nullable: true })
  users: UserType[];
}

@ObjectType()
export class LinkedinAdvancedType extends ExtendedBaseEntity {
  @Field(() => ID)
  id: string;

  @Field()
  url: string;
}

@ObjectType()
export class LinkedinProfileType {
  @Field(() => [LinkedinBasicType], { nullable: true })
  profiles: LinkedinBasicType[];

  @Field(() => Int, { nullable: true })
  totalCount: number;
}

@ObjectType()
export class LinkedinLocationsType {
  @Field(() => [String], { nullable: true })
  locations: string[];

  @Field(() => Int, { nullable: true })
  totalCount: number;
}

@ObjectType()
export class LinkedinCompaniesType {
  @Field(() => [String], { nullable: true })
  companies: string[];

  @Field(() => Int, { nullable: true })
  totalCount: number;
}

@ObjectType()
export class LinkedinTitleType {
  @Field(() => [String], { nullable: true })
  titles: string[];

  @Field(() => Int, { nullable: true })
  totalCount: number;
}

@ObjectType()
export class UserLinkedinType {
  @Field({ nullable: true })
  userId: string;

  @Field({ nullable: true })
  linkedinId: string;
}
