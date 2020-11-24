import { IsNotEmpty } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  @Field()
  firstName: string;

  @IsNotEmpty()
  @Field()
  lastName: string;

  @IsNotEmpty()
  @Field()
  email: string;

  @IsNotEmpty()
  @Field()
  password: string;
}
