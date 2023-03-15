import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, Max } from 'class-validator';

@InputType()
export class BulkLinkedinInput {
  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  fullName: string;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  company: string;

  @Field({ nullable: true })
  location: string;

  @Field()
  url: string;
}

@InputType()
export class GetLinkedinProfileInput {
  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  company: string;

  @Field({ nullable: true })
  location: string;

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

@InputType()
export class UserLinkedinInput {
  @Field()
  userId: string;

  @Field({ nullable: true })
  linkedinId: string;
}
