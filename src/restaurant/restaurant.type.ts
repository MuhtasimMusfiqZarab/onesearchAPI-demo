import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ExtendedBaseEntity } from '../config/_base.entity';

@ObjectType()
export class RestaurantType extends ExtendedBaseEntity {
  @Field(() => ID)
  id: string;

  @Field({})
  name: string;

  @Field({ nullable: true })
  dayName: string;

  @Field({ nullable: true })
  startTime: string;

  @Field({ nullable: true })
  endTime: string;
}
