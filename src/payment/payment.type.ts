import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ExtendedBaseEntity } from '../config/_base.entity';

@ObjectType()
export class PaymentType extends ExtendedBaseEntity {
  @Field()
  amount: number;
}
