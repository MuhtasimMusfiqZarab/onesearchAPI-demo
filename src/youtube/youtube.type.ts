import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ExtendedBaseEntity } from '../config/_base.entity';

@ObjectType()
export class YoutubeType extends ExtendedBaseEntity {
  @Field({ nullable: false })
  channel_url: string;
}
