import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, Max } from 'class-validator';

@InputType()
export class GetRestaurantsInput {
  @Field({ nullable: true })
  time: string;

  @Field({ nullable: true })
  searchText: string;

  @IsNotEmpty()
  @Field()
  offset: number;

  @IsNotEmpty()
  @Max(10)
  @Field()
  limit: number;
}
