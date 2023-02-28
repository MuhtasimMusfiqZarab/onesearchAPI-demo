import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ExtendedBaseEntity } from '../config/_base.entity';

@ObjectType()
export class RequestType extends ExtendedBaseEntity {
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
