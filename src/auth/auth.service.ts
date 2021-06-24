import { Injectable } from '@nestjs/common';
import { BadRequestException, ForbiddenException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';

import { UserService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService, // private jwtService: JwtService,
  ) {}

  async googleLogin(req) {
    if (!req.user) throw new BadRequestException();

    console.log('This is the request user', req.user);

    await this.userService.createUser(req.user);

    // try {
    //   const user = {
    //     email: emails[0].value,
    //     firstName: name.givenName,
    //     lastName: name.familyName,
    //     picture: photos[0].value,
    //     accessToken,
    //   };

    //   await this.usersService.store(newUser);
    //   return this.login(newUser);
    // } catch (e) {
    //   throw new Error(e);
    // }

    // return {
    //   message: 'User information from google',
    //   user: req.user,
    // };
  }
}
