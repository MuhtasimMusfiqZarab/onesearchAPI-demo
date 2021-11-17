import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './users.service';
import UserResolver from './users.resolver';
import { UserRepository } from './user.repository';

import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  providers: [UserService, UserResolver],
  //this service can be used by other modules (ex Auth Module)
  exports: [UserService],
})
export class UsersModule {}
