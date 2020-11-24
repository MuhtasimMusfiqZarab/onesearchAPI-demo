import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType('JobRole')
export class JobRoleType {
  @Field(() => ID)
  roleId: string;

  @Field()
  roleName: string;
}
