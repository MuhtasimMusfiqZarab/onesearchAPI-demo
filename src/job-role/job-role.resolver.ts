import { Args, Query, Resolver, Mutation, ID } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { JobRoleService } from './job-role.service';
import { JobRoleType } from './job-role.type';
import { CreateJobRoleInput } from './input/create-job-role.input';

@Resolver()
export class JobRoleResolver {
  constructor(private readonly jobRoleService: JobRoleService) {}

  @Query(() => JobRoleType)
  async jobRole(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<JobRoleType> {
    const role = await this.jobRoleService.getJobRoleById(id);
    if (!role) {
      throw new NotFoundException(id);
    }
    return role;
  }
  @Mutation(() => JobRoleType)
  async createJobRole(
    @Args('data') createJobRoleInput: CreateJobRoleInput,
  ): Promise<JobRoleType> {
    return this.jobRoleService.createJobRole(createJobRoleInput);
  }
}
