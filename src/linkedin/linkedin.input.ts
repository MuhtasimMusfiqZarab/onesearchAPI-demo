import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BulkInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
