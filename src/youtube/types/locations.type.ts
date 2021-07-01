import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LocationsType {
  @Field(() => [String])
  locations: string[];

  @Field(() => Int)
  totalCount: number;
}
