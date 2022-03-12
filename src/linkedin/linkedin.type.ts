import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ExtendedBaseEntity } from '../config/_base.entity';

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
