import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AdminGuard } from '../shared/guards/user.guard';
import { UseGuards } from '@nestjs/common';
import { LinkedinType } from './linkedin.type';

import { LinkedinService } from './linkedin.service';
import { BulkInput } from './linkedin.input';

@Resolver(() => LinkedinType)
export class LinkedinResolver {
  constructor(private readonly linkedinService: LinkedinService) {}

  //add new lead
  @Mutation(() => [LinkedinType])
  @UseGuards(AdminGuard)
  async addLinkedinLeads(
    @Args('input', { type: () => [BulkInput], nullable: false })
    input: BulkInput[],
  ): Promise<LinkedinType[]> {
    return this.linkedinService.addLinkedinLeads(input);
  }
}
