import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkedinService } from './linkedin.service';
import { LinkedinResolver } from './linkedin.resolver';
import { LinkedinRepository } from './linkedin.repository';

import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../user/user.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forFeature([LinkedinRepository]),
  ],
  providers: [LinkedinService, LinkedinResolver],
})
export class LinkedinModule {}
