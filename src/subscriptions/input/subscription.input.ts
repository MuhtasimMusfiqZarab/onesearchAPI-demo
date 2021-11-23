import { IsNotEmpty } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSubscriptionInput {
  @IsNotEmpty()
  @Field()
  title: string;

  @IsNotEmpty()
  @Field()
  price: number;

  @IsNotEmpty()
  @Field()
  totalTimestamp: number;

  @IsNotEmpty()
  @Field()
  totalCoins: number;

  @Field({ nullable: true })
  discountPercentage: number;

  @IsNotEmpty()
  @Field()
  benefits: string[];
}
