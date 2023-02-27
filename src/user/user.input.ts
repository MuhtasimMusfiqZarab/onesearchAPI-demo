import { IsEmail } from 'class-validator';
import { IsNotEmpty, Max } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { AuthProvider } from './user.enum';

@InputType()
export class RegistrationInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  token: string;

  @Field()
  avatarLink: string;

  @Field(() => AuthProvider, { nullable: true })
  authProvider: AuthProvider;
}

@InputType()
export class GetUsersInput {
  @Field({ nullable: true })
  location: string;

  @Field({ nullable: true })
  searchText: string;

  @Field({ nullable: true })
  accessRole: string;

  @IsNotEmpty()
  @Field()
  offset: number;

  @IsNotEmpty()
  @Max(10)
  @Field()
  limit: number;
}

@InputType()
export class GetUserReviewInput {
  @IsNotEmpty()
  @Field()
  offset: number;

  @IsNotEmpty()
  @Max(10)
  @Field()
  limit: number;
}

@InputType()
export class AddReviewInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  reviewText: string;

  @IsNotEmpty()
  @Field()
  rating: number;
}
