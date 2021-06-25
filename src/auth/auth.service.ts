import { Injectable } from '@nestjs/common';
import { BadRequestException, ForbiddenException } from '@nestjs/common';

import { UserService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async googleLogin(req) {
    if (!req.user) throw new BadRequestException();
    return await this.userService.createUser(req.user);
  }
}
