import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ExtendedBaseEntity } from '../config/_base.entity';
import { AuthProvider, UserAccessRole } from './user.enum';

@ObjectType()
export class UserType extends ExtendedBaseEntity {
  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  avatarLink: string;

  @Field({ nullable: true })
  token: string;

  @Field(() => AuthProvider, { nullable: true })
  authProvider: string;

  @Field()
  isActive: boolean;

  @Field(() => UserAccessRole)
  accessRole: UserAccessRole;

  @Field()
  language: string;
}

@ObjectType()
export class GetAllUsersType {
  @Field(() => [UserType])
  users: UserType[];

  @Field(() => Int)
  totalCount: number;
}
