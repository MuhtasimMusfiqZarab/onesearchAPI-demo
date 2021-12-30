import { Injectable, NotFoundException } from '@nestjs/common';
import User from './user.entity';
import { RegistrationInput, GetUsersInput } from './user.input';
import { UserAccessRole } from './user.enum';
import { GetAllUsersType } from './user.type';

import { isValidString } from '../utils/validation';
import { ILike } from 'typeorm';
import { defaultOrder } from '../utils/query';

import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  // inject the user repository
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  // find the user(used for current user decorator)
  async findOne(id: string): Promise<User> {
    //find the t
    const found = await this.userRepository.findOne({
      where: { id },
    });
    if (!found) {
      //we throw an error without a catch block because nest js lets us do that without a catch block
      throw new NotFoundException(`User with id ${id} not found!`);
    }
    return found;
  }

  //create user using google login
  async createUser(input: RegistrationInput): Promise<User> {
    const {
      firstName,
      lastName,
      email,
      avatarLink,
      token,
      authProvider,
    } = input;

    try {
      let queryArgs: any = [{ email }, { token }];
      queryArgs = [{ email }, { token }];

      const user = await User.findOne({ where: queryArgs });

      //if user already exists
      if (user) {
        return user;
      } else {
        const createdBy = 'DEFAULT_USER';

        let accessRole: UserAccessRole = UserAccessRole.Demo;

        // default admin email for first login
        if (email === process.env.DEFAULT_ADMIN_EMAIL) {
          accessRole = UserAccessRole.Admin;
        }

        const newUser = User.create({
          firstName,
          lastName,
          email,
          avatarLink,
          token,
          authProvider,
          accessRole,
          createdBy,
          updatedBy: createdBy,
        });
        return await newUser.save();
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllUsers(data: GetUsersInput): Promise<GetAllUsersType> {
    const { location, searchText, offset, limit } = data;

    try {
      let query: any = {};

      if (location) query = { ...query, location };

      if (isValidString(searchText)) {
        query = [{ ...query, channel_name: ILike(`%${searchText}%`) }];
      }

      const [users, totalCount] = await this.userRepository.findAndCount({
        where: query,
        // order: { ...defaultOrder },
        skip: offset,
        take: limit,
      });

      if (!users) {
        throw new NotFoundException(`No user found@!`);
      }

      return { users, totalCount };
    } catch (error) {
      throw new Error(error);
    }
  }
}
