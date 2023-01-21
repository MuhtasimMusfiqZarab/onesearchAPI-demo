import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, Max } from 'class-validator';

@InputType()
export class GetRequestInput {
  @Field({ nullable: true })
  socialblade_category: string;

  @Field({ nullable: true })
  location: string;

  @Field({ nullable: true })
  searchText: string;

  @Field({ nullable: true })
  description: string;

  @IsNotEmpty()
  @Field()
  offset: number;

  @IsNotEmpty()
  @Max(10)
  @Field()
  limit: number;
}
