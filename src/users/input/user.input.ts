import { IsEmail } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { AuthProvider } from '../user.entity';

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
