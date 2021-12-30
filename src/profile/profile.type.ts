import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ExtendedBaseEntity } from '../config/_base.entity';

@ObjectType()
export class ProfileType extends ExtendedBaseEntity {
  @Field({ nullable: true })
  phoneNumber: string;

  @Field({ nullable: true })
  country: string;

  @Field({ nullable: true })
  city: string;

  @Field({ nullable: true })
  availableCredits: number;
}
