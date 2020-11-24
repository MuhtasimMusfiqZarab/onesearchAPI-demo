import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobRoleRepository } from './job-role.repository';
import { CreateJobRoleInput } from './input/create-job-role.input';
import { JobRole } from './job-role.entity';

@Injectable()
export class JobRoleService {
  constructor(
    @InjectRepository(JobRoleRepository)
    private jobRoleRepository: JobRoleRepository,
  ) {}

  async getJobRoleById(id: string): Promise<JobRole> {
    const found = await this.jobRoleRepository.findOne({ roleId: id });
    if (!found) {
      throw new NotFoundException(`Job Role with id ${id} not found!`);
    }
    return found;
  }

  async createJobRole(
    createJobRoleInput: CreateJobRoleInput,
  ): Promise<JobRole> {
    return this.jobRoleRepository.createJobRole(createJobRoleInput);
  }
}
