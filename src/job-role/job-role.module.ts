import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobRoleResolver } from './job-role.resolver';
import { JobRoleService } from './job-role.service';
import { JobRoleRepository } from './job-role.repository';

@Module({
  imports: [TypeOrmModule.forFeature([JobRoleRepository])],
  providers: [JobRoleResolver, JobRoleService],
})
export class JobRoleModule {}
