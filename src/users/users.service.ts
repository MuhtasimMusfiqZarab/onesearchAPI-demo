import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { CreateUserInput } from './input/create-user.input';
import { UpdateUserInput } from './input/update-user.input';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async getUserById(id: string): Promise<User> {
    const found = await this.userRepository.findOne({ userId: id });
    if (!found) {
      throw new NotFoundException(`User with id ${id} not found!`);
    }
    return found;
  }

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    return this.userRepository.createUser(createUserInput);
  }

  async updateUser(updateUserInput: UpdateUserInput): Promise<User> {
    return this.userRepository.UpdateUserFirstName(updateUserInput);
  }
}
