import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import User from '../user.entity';

@ObjectType()
export class UserPayload {
  @Field(() => Int)
  totalCount: number;

  @Field(() => [User])
  users: User[];
}

@ObjectType()
export class UserBaseInfo {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  userId?: string;

  @Field()
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  avatarLink?: string;
}
