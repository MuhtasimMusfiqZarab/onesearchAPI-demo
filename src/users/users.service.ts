import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import CreateUserInput from './input/create-user.input';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: UserRepository,
  ) {}

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: string) {
    return this.usersRepository.findOne(id);
  }

  findBy(criteria: any) {
    return this.usersRepository.find(criteria);
  }

  async store(data: CreateUserInput) {
    const { email, firstName, lastName } = data;
    const user = await this.usersRepository.findOne({ email });
    if (user) throw new BadRequestException('User already exists');

    const newUser = await this.usersRepository.save({
      email,
      firstName,
      lastName,
    });

    console.log('This is the new user found after mutation', newUser);

    return newUser;
  }

  async update(id: string, data: CreateUserInput) {
    const user = await this.usersRepository.findOne(id);
    if (!user) throw new NotFoundException();

    // WARNING: In this case password is stored as PLAINTEXT
    // It is only for show how it works!!!
    Object.assign(user, data);

    this.usersRepository.update(id, user);
    return user;
  }

  async destroy(id: string) {
    const user = await this.usersRepository.findOne(id);
    if (!user) throw new NotFoundException();
    this.usersRepository.remove(user);
  }
}
