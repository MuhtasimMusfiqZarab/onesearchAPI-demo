import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { AdminGuard, AuthGuard } from '../shared/guards/user.guard';
import { UseGuards } from '@nestjs/common';
import {
  LinkedinBasicType,
  LinkedinProfileType,
  LinkedinCompaniesType,
  LinkedinLocationsType,
  LinkedinTitleType,
} from './linkedin.type';

import { LinkedinService } from './linkedin.service';
import { BulkLinkedinInput, GetLinkedinProfileInput } from './linkedin.input';

import { UserLinkedinType } from './linkedin.type';
import { UserLinkedinInput } from './linkedin.input';

import { UserService } from 'src/user/user.service';

@Resolver(() => LinkedinBasicType)
export class LinkedinResolver {
  constructor(
    private readonly linkedinService: LinkedinService,
    private readonly userService: UserService,
  ) {}

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
  @Query(() => LinkedinCompaniesType, { nullable: true })
  async getLinkedinCompanies(): Promise<LinkedinCompaniesType | null> {
    return await this.linkedinService.getLinkedinCompanies();
  }

  //location
  @UseGuards(AuthGuard)
  @Query(() => LinkedinLocationsType, { nullable: true })
  async getLinkedinLocations(): Promise<LinkedinLocationsType | null> {
    return await this.linkedinService.getLinkedinLocations();
  }

  //job title
  @UseGuards(AuthGuard)
  @Query(() => LinkedinTitleType, { nullable: true })
  async getLinkedinTitles(): Promise<LinkedinTitleType | null> {
    return await this.linkedinService.getLinkedinTitles();
  }

  //unlockLinkedin
  @Mutation(() => UserLinkedinType)
  @UseGuards(AuthGuard)
  async unlockLinkedinLead(
    @Args('input', { type: () => UserLinkedinInput, nullable: false })
    input: UserLinkedinInput,
  ): Promise<any> {
    // return this.userYoutubeService.unlockYoutubeLead(input);
    const { userId, linkedinId } = input;
    const user = await this.userService.findOne(userId);
    const linkedin = await this.linkedinService.findOne(linkedinId);

    user.linkedin = [...user.linkedin, linkedin];
    linkedin.users = [...linkedin.users, user];

    await user.save();
    await linkedin.save();

    return { userId, linkedinId };
  }
}
