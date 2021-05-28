import { IsNotEmpty } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetChannelsInput {
  @IsNotEmpty()
  @Field()
  socialblade_category: string;

  @Field({ nullable: true })
  subscribers: string;

  @Field({ nullable: true })
  location: string;

  @Field({ nullable: true })
  searchText: string;

  @IsNotEmpty()
  @Field()
  offset: number;

  @IsNotEmpty()
  @Field()
  limit: number;
}
