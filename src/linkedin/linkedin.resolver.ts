import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AdminGuard } from '../shared/guards/user.guard';
import { UseGuards } from '@nestjs/common';
import { LinkedinBasicType } from './linkedin.type';

import { LinkedinService } from './linkedin.service';
import { BulkLinkedinInput } from './linkedin.input';

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
}
