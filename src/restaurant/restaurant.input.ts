import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class BulkRestaurantInput {
  @IsNotEmpty()
  @Field()
  name: string;

  @IsNotEmpty()
  @Field()
  dayName: string;

  @IsNotEmpty()
  @Field()
  startTime: string;

  @IsNotEmpty()
  @Field()
  endTime: string;
}
