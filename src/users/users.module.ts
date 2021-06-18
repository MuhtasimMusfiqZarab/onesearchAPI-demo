import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { ConfigModule } from '@nestjs/config';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([UserRepository]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.USER_DB,
      entities: [User],
      synchronize: true,
    }),
  ],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
