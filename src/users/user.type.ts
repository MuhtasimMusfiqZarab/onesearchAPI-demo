import { Field, ObjectType } from '@nestjs/graphql';
import { ExtendedBaseEntity } from '../config/_base.entity';

@ObjectType()
export class UserType extends ExtendedBaseEntity {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;
}
