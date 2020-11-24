import { Repository, EntityRepository } from 'typeorm';
import { JobRole } from './job-role.entity';
import { CreateJobRoleInput } from './input/create-job-role.input';

@EntityRepository(JobRole)
export class JobRoleRepository extends Repository<JobRole> {
  async createJobRole(
    createJobRoleInput: CreateJobRoleInput,
  ): Promise<JobRole> {
    const { roleName } = createJobRoleInput;

    const jobRole = new JobRole();
    jobRole.roleName = roleName;

    //saving to the DB
    await jobRole.save();
    return jobRole;
  }
}
