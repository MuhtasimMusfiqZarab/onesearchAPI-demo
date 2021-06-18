import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserType } from '../user.type';

@ObjectType()
export class UsersType {
  @Field(() => [UserType])
  users: UserType[];

  @Field(() => Int)
  totalCount: number;
}
