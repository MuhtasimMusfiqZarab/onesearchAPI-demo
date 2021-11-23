import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType('Subscription')
export class SubscriptionType {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  price: number;

  @Field()
  totalTimestamp: number;

  @Field()
  totalCoins: number;

  @Field({ nullable: true })
  discountPercentage: number;

  @Field()
  benefits: string[];
}
