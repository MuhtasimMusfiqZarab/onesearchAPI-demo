import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const token = ctx.getContext()?.headers?.authorization as string;

    const authorization = ctx.getContext().req.headers.authorization;
    const jwtToken = authorization.split(' ')[1];

    //verify the token and get the user type for API authentication
    const result: any = await this.authService.validateToken(jwtToken);
    // console.log('This is the result from guard', result);

    //check the user type instead of email
    if (result?.email) {
      return true;
    }

    return false;
  }
}
