import { Injectable } from '@nestjs/common';
import { BadRequestException, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { Logger } from '@nestjs/common';

import { UserService } from '../users/users.service';

//most of the user validation should be done in this service with the help of user service
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  //this login both validates the user and provides a JWT token to the user
  async googleLogin(req, res) {
    if (!req.user) throw new BadRequestException();

    //save the user in the database if not present & return a JWT token
    const savedUser = await this.userService.createUser(req.user);

    const payload = {
      email: savedUser.email,
      sub: savedUser.id,
    };

    //send the jwt token to the url param as because I cound not send JWT froma here as rest response
    const redirectURL =
      process.env.redirectURLAfterSignToken + this.jwtService.sign(payload);

    res.redirect(redirectURL);
  }

  //for manual token validation used by other modules
  async validateToken(token: string): Promise<boolean> {
    if (!token || token.length === 0) {
      Logger.warn('No token provided with the request');
      return false;
    }

    try {
      // jwt is defined, decode and verify. and provide the current user to the guard
      const result: any = await this.jwtService.verify(token);
      return result;
    } catch (e) {
      Logger.error('ERROR: ', e);
    }

    return false;
  }
}
