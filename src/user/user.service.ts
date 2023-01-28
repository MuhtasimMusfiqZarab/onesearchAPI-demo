import { Injectable, NotFoundException } from '@nestjs/common';
import User from './user.entity';
import { RegistrationInput, GetUsersInput } from './user.input';
import { UserAccessRole } from './user.enum';
import { GetAllUsersType } from './user.type';
import { isValidString } from '../utils/validation';
import { ILike } from 'typeorm';
import { UserType } from './user.type';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async findOne(id: string): Promise<UserType> {
    const found = await this.userRepository.findOne({
      where: { id },
    });
    if (!found) {
      throw new NotFoundException(`User with id ${id} not found!`);
    }
    return found;
  }

  async createUser(input: RegistrationInput): Promise<UserType> {
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

      if (user) {
        return user;
      } else {
        const createdBy = 'DEFAULT_USER';

        let accessRole: UserAccessRole = UserAccessRole.Demo;

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
        query = [{ ...query, firstName: ILike(`%${searchText}%`) }];
      }

      const [users, totalCount] = await this.userRepository.findAndCount({
        where: query,
        // order: { ...defaultOrder },
        skip: offset,
        take: limit,
        relations: ['profile', 'youtube'],
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
