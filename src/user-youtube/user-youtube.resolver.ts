import { Args, Query, Resolver, Int, Mutation } from '@nestjs/graphql';

import { UserYoutubeService } from './user-youtube.service';
import { UserYoutubeType } from './user-youtube.type';
import { UserYoutubeInput } from './user-youtube.input';

import { AuthGuard, AdminGuard } from 'src/shared/guards/user.guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class UserYoutubeResolver {
  constructor(private readonly userYoutubeService: UserYoutubeService) {}

  //unlock youtube lead
  @Mutation(() => [UserYoutubeType])
  @UseGuards(AuthGuard)
  async unlockYoutubeLead(
    @Args('input', { type: () => [UserYoutubeInput], nullable: false })
    input: UserYoutubeInput[],
  ): Promise<UserYoutubeType[]> {
    return this.userYoutubeService.unlockYoutubeLead(input);
  }
}
