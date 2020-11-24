import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserInput } from './input/create-user.input';
import { UpdateUserInput } from './input/update-user.input';
import { NotFoundException } from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(createUserInput: CreateUserInput): Promise<User> {
    const { firstName, lastName, email, password } = createUserInput;

    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = password;

    //saving to the DB
    await user.save();
    return user;
  }

  //update user
  async UpdateUserFirstName(updateUserInput: UpdateUserInput): Promise<User> {
    const { id, firstname } = updateUserInput;

    const user = await this.findOne({ userId: id });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found!`);
    }

    user.firstName = firstname;
    await user.save();

    return user;
  }
}
