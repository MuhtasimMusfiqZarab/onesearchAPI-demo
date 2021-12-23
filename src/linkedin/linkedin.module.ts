import { Module } from '@nestjs/common';
import { LinkedinService } from './linkedin.service';
import { LinkedinResolver } from './linkedin.resolver';

@Module({
  providers: [LinkedinService, LinkedinResolver]
})
export class LinkedinModule {}
