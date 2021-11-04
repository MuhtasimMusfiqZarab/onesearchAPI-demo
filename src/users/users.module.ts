import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './users.service';
import UserResolver from './users.resolver';
import { UserRepository } from './user.repository';
import User from './user.entity';

@Module({
  imports: [
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
  providers: [UserService, UserResolver],

  //this service can be used by other modules (ex Auth Module)
  exports: [UserService],
})
export class UsersModule {}
