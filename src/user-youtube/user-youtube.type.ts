import { ObjectType, Field } from '@nestjs/graphql';
import { ExtendedBaseEntity } from '../config/_base.entity';

@ObjectType()
export class UserYoutubeType extends ExtendedBaseEntity {
  @Field({ nullable: true })
  userId: string;

  @Field({ nullable: true })
  youtubeId: string;
}
