import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class UserYoutubeType {
  @Field({ nullable: true })
  userId: string;

  @Field({ nullable: true })
  youtubeId: string;
}
