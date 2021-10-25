import { Injectable } from '@nestjs/common';
import { BadRequestException, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../users/users.service';

//most of the user validation should be done in this service with the help of user service
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  //this login both validates the user and provides a JWT token to the user
  async googleLogin(req) {
    if (!req.user) throw new BadRequestException();

    //save the user in the database if not present & return a JWT token
    const savedUser = await this.userService.createUser(req.user);

    const payload = { email: savedUser.email, sub: savedUser.id };
    return {
      JWT_TOKEN: this.jwtService.sign(payload),
    };
  }
}
