import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { UserRepository } from './user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
