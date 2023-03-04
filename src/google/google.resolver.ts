import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { AdminGuard, AuthGuard } from '../shared/guards/user.guard';
import { UseGuards } from '@nestjs/common';

import { GoogleService } from './google.service';
import { GoogleBasicType, GoogleProfilesType } from './google.type';

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

  //get all google profiles
  @UseGuards(AuthGuard)
  @Query(() => GoogleProfilesType, { nullable: true })
  async getAllGoogleProfiles(
    @Args('data') data: GetGoogleInput,
  ): Promise<GoogleProfilesType> {
    return await this.googleService.getAllGoogleProfiles(data);
  }

  @UseGuards(AuthGuard)
  @Query(() => GoogleBasicType, { nullable: true })
  async getGoogleProfile(
    @Args('id', { type: () => String }) id: string,
  ): Promise<GoogleBasicType | null> {
    const profile = await this.googleService.getGoogleProfileById(id);
    if (!profile) {
      throw new NotFoundException(id);
    }
    return profile;
  }
}
