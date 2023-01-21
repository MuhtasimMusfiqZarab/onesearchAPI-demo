import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ExtendedBaseEntity } from '../config/_base.entity';

@ObjectType()
export class RequestType extends ExtendedBaseEntity {
  @Field({ nullable: true })
  socialblade_category: string;

  @Field({ nullable: true })
  location: string;

  @Field({ nullable: true })
  description: string;
}
