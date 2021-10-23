import { Injectable } from '@nestjs/common';
import User, { UserAccessRole } from './user.entity';

@Injectable()
export class UserService {
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
