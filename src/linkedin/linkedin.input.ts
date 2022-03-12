import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BulkLinkedinInput {
  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  fullName: string;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  company: string;

  @Field({ nullable: true })
  location: string;

  @Field()
  url: string;
}
