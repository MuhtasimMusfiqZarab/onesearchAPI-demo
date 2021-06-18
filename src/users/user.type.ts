import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType('User')
export class UserType {
  @Field(() => Int)
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;
}
