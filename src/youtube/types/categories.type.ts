import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CategoriesType {
  @Field(() => [String])
  categories: string[];

  @Field(() => Int)
  totalCount: number;
}
