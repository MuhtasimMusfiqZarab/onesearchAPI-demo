import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType('User')
export class UserType {
  @Field(() => ID)
  userId: string;

  @Field()
  userName: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  createDate: string;

  @Field()
  lastUpdateDate: string;

  @Field()
  email: string;

  @Field()
  employeeId: string;

  @Field()
  password: string;

  @Field()
  profilePicture: string;
}
