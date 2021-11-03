import { IsEmail, IsIn } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { UserAccessRole, AuthProvider } from '../user.entity';

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

//CREATE USER
// @InputType()
// export class UserInput {
//   @Field()
//   firstName: string;

//   @Field()
//   lastName: string;

//   @Field({ nullable: true })
//   token: string;

//   @Field(() => AuthProvider, { nullable: true })
//   authProvider: AuthProvider;

//   @Field({ nullable: true })
//   avatarLink: string;

//   @IsIn([
//     UserAccessRole.Demo,
//     UserAccessRole.Pro,
//     UserAccessRole.Admin,
//     UserAccessRole.Developer,
//     UserAccessRole.Support,
//   ])
//   @Field(() => UserAccessRole, { nullable: true })
//   accessRole: UserAccessRole;

//   @Field({ nullable: true })
//   language: string;

//   @Field({ nullable: true })
//   regionId: string;

//   @Field({ nullable: true })
//   retailerId: string;

//   @Field({ nullable: true })
//   jobRoleId: string;

//   @Field({ nullable: true })
//   userGroupId: string;
// }

// //UPDATE USER PAYLOAD
// @InputType()
// export class UpdateUserInput {
//   @Field({ nullable: true })
//   userId: string;

//   @Field({ nullable: true })
//   firstName: string;

//   @Field({ nullable: true })
//   lastName: string;

//   @Field({ nullable: true })
//   email: string;

//   @Field({ nullable: true })
//   avatarLink: string;

//   @Field(() => UserAccessRole, { nullable: true })
//   accessRole: UserAccessRole;

//   @Field({ nullable: true })
//   language: string;

//   @Field({ nullable: true })
//   regionId: string;

//   @Field({ nullable: true })
//   retailerId: string;

//   @Field({ nullable: true })
//   jobRoleId: string;

//   @Field({ nullable: true })
//   userGroupId: string;
// }

// @InputType()
// export class GetUserArgs {
//   @Field({ nullable: true })
//   searchText: string;

//   @Field({ nullable: true })
//   regionId: string;

//   @Field({ nullable: true })
//   retailerId: string;

//   @Field({ nullable: true })
//   jobRoleId: string;

//   @Field(() => UserAccessRole, { nullable: true })
//   accessRole: UserAccessRole;

//   @Field({ nullable: true })
//   userGroupId: string;

//   @Field({ nullable: true })
//   offset: number;

//   @Field({ nullable: true })
//   limit: number;
// }

// @InputType()
// export class BulkUserInput {
//   @Field()
//   firstName: string;

//   @Field()
//   lastName: string;

//   @IsEmail()
//   @Field()
//   email: string;

//   @Field(() => UserAccessRole, { nullable: true })
//   accessRole: UserAccessRole;

//   @Field({ nullable: true })
//   jobRoleName?: string;

//   @Field({ nullable: true })
//   retailerName?: string;

//   @Field({ nullable: true })
//   regionName?: string;

//   @Field({ nullable: true })
//   userGroupTitle?: string;
// }
