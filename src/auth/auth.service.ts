import { Injectable } from '@nestjs/common';
import { BadRequestException, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async googleLogin(req) {
    if (!req.user) throw new BadRequestException();

    //save the user in the database
    const savedUser = await this.userService.createUser(req.user);
    console.log('Here is the saved user', savedUser);
    //return the jwt token
    const payload = { username: savedUser.firstName, sub: savedUser.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
