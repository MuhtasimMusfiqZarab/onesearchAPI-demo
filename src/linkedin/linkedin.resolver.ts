import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { AdminGuard, AuthGuard } from '../shared/guards/user.guard';
import { UseGuards } from '@nestjs/common';
import {
  LinkedinBasicType,
  LinkedinProfileType,
  CompaniesType,
  LocationsType,
  TitleType,
} from './linkedin.type';

import { LinkedinService } from './linkedin.service';
import { BulkLinkedinInput, GetLinkedinProfileInput } from './linkedin.input';

@Resolver(() => LinkedinBasicType)
export class LinkedinResolver {
  constructor(private readonly linkedinService: LinkedinService) {}

  //add new lead
  @Mutation(() => [LinkedinBasicType])
  @UseGuards(AdminGuard)
  async addLinkedinLeads(
    @Args('input', { type: () => [BulkLinkedinInput], nullable: false })
    input: BulkLinkedinInput[],
  ): Promise<LinkedinBasicType[]> {
    return this.linkedinService.addLinkedinLeads(input);
  }

  //get all linkedin profiles
  @UseGuards(AuthGuard)
  @Query(() => LinkedinProfileType, { nullable: true })
  async getLinkedinProfiles(
    @Args('data') data: GetLinkedinProfileInput,
  ): Promise<LinkedinProfileType> {
    return await this.linkedinService.getAllProfiles(data);
  }

  //get specific user
  @UseGuards(AuthGuard)
  @Query(() => LinkedinBasicType, { nullable: true })
  async getLinkedinProfile(
    @Args('id', { type: () => String }) id: string,
  ): Promise<LinkedinBasicType | null> {
    const profile = await this.linkedinService.getLinkedinProfileById(id);
    if (!profile) {
      throw new NotFoundException(id);
    }
    return profile;
  }

  //get companies
  @UseGuards(AuthGuard)
  @Query(() => CompaniesType, { nullable: true })
  async getLinkedinCategories(): Promise<CompaniesType | null> {
    return await this.linkedinService.getLinkedinCompanies();
  }

  //location
  @UseGuards(AuthGuard)
  @Query(() => LocationsType, { nullable: true })
  async getLinkedinLocations(): Promise<LocationsType | null> {
    return await this.linkedinService.getLinkedinLocations();
  }

  //job title
  @UseGuards(AuthGuard)
  @Query(() => TitleType, { nullable: true })
  async getLinkedinTitles(): Promise<TitleType | null> {
    return await this.linkedinService.getLinkedinTitles();
  }
}
