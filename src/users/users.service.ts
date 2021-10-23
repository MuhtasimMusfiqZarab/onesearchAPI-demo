import { Injectable, NotFoundException } from '@nestjs/common';
import User, { UserAccessRole } from './user.entity';

import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  // inject the user repository
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

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
  async createUser(input: any): Promise<User> {
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
}
