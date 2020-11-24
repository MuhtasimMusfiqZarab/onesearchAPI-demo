import { IsNotEmpty } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateJobRoleInput {
  @IsNotEmpty()
  @Field()
  roleName: string;
}
