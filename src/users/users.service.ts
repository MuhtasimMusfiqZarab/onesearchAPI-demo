import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm';
import {
  RegistrationInput,
  GetUserArgs,
  BulkUserInput,
  UpdateUserInput,
} from './input/user.input';
import User, { UserAccessRole } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  async createUser(input: any): Promise<User> {
    console.log('This is the input provided', input);
    const { userId, email, firstName, lastName, key, authProvider } = input;
    try {
      let queryArgs: any = [{ email }, { key }];
      // if (isValidString(userId)) {
      queryArgs = [{ userId }, { email }, { key }];
      // }
      // First checking if the user already exists
      const user = await User.findOne({ where: queryArgs });

      if (user) {
        if (user.email === email || user.key === key) {
          throw new Error('User already exists!');
        }
        if (userId && user.userId === userId) {
          throw new Error('UserId already exists, try another one!');
        }
      }
      const createdBy = 'DEFAULT_USER';

      let accessRole: UserAccessRole = UserAccessRole.Employee;

      // One Email address should be provided in the env variables, to make the first super-admin
      if (email === process.env.DEFAULT_ADMIN_EMAIL) {
        accessRole = UserAccessRole.RtsAdmin;
      }

      const newUser = User.create({
        userId,
        email,
        firstName,
        lastName,
        key,
        authProvider,
        accessRole,
        createdBy,
        updatedBy: createdBy,
      });
      return await newUser.save();
    } catch (error) {
      throw new Error(error);
    }
  }
}
