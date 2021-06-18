import { IsNotEmpty, IsEmail } from 'class-validator';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export default class CreateUserInput {
  @Field()
  @IsNotEmpty()
  firstName: string;

  @Field()
  @IsNotEmpty()
  lastName: string;

  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
