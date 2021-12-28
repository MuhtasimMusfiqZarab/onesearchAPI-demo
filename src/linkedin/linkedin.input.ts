import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BulkLinkedinInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
