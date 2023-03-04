import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, Max } from 'class-validator';

@InputType()
export class AddRequestInput {
  @Field()
  userId: string;

  @Field({ nullable: true })
  platform: string;

  @Field({ nullable: true })
  category: string;

  @Field({ nullable: true })
  location: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  datasize: string;
}

@InputType()
export class GetRequestInput {
  @Field({ nullable: true })
  platform: string;

  @Field({ nullable: true })
  category: string;

  @Field({ nullable: true })
  location: string;

  @Field({ nullable: true })
  status: string;

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
