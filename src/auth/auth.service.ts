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
    //return the jwt token
    const payload = { email: savedUser.email, sub: savedUser.id };
    return {
      JWT_TOKEN: this.jwtService.sign(payload),
    };
  }

  async validateUser(userId: string): Promise<any> {
    const user = await this.userService.findOne(userId);

    if (user) {
      return user;
    }
    return null;
  }
}
