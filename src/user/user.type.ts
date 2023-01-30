import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ExtendedBaseEntity } from '../config/_base.entity';
import { AuthProvider, UserAccessRole } from './user.enum';
import { ProfileType } from 'src/profile/profile.type';
import { YoutubeType } from 'src/youtube/youtube.type';
import { PaymentType } from 'src/payment/payment.type';

@ObjectType()
export class UserType extends ExtendedBaseEntity {
  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  avatarLink: string;

  @Field({ nullable: true })
  token: string;

  @Field(() => AuthProvider, { nullable: true })
  authProvider: string;

  @Field({ nullable: true })
  isActive: boolean;

  @Field(() => UserAccessRole)
  accessRole: UserAccessRole;

  @Field({ nullable: true })
  language: string;

  @Field({ nullable: true })
  reviewText: string;

  @Field({ nullable: true })
  rating: number;

  @Field({ nullable: true })
  profile: ProfileType;

  @Field(() => [YoutubeType], { nullable: true })
  youtube: YoutubeType[];

  @Field(() => [PaymentType], { nullable: true })
  payments: PaymentType[];
}

@ObjectType()
export class UserReviewType extends ExtendedBaseEntity {
  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  reviewText: string;

  @Field({ nullable: true })
  rating: number;
}

@ObjectType()
export class GetAllUsersType {
  @Field(() => [UserType])
  users: UserType[];

  @Field(() => Int)
  totalCount: number;
}

@ObjectType()
export class GetAllUserReviewsType {
  @Field(() => [UserReviewType])
  users: UserReviewType[];

  @Field(() => Int)
  totalCount: number;
}
