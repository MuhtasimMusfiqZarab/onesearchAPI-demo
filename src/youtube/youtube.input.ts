import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BulkYoutubeInput {
  @Field({ nullable: false })
  channel_url: string;
}
