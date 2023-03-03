import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { AdminGuard, AuthGuard } from '../shared/guards/user.guard';
import { UseGuards } from '@nestjs/common';

import { GoogleService } from './google.service';
import { GoogleBasicType } from './google.type';

import { BulkGoogleInput, GetGoogleInput } from './google.input';

@Resolver(() => GoogleBasicType)
export class GoogleResolver {
  constructor(private readonly googleService: GoogleService) {}

  //add new lead
  @Mutation(() => [GoogleBasicType])
  @UseGuards(AdminGuard)
  async addGoogleLeads(
    @Args('input', { type: () => [BulkGoogleInput], nullable: false })
    input: BulkGoogleInput[],
  ): Promise<GoogleBasicType[]> {
    return this.googleService.addGoogleLeads(input);
  }
}
