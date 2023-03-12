import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, Max } from 'class-validator';

@InputType()
export class UserYoutubeInput {
  @Field()
  userId: string;

  @Field({ nullable: true })
  youtubeId: string;

  @Field({ nullable: true })
  youtubeChannelUrl: string;
}
