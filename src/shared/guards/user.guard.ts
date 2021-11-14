import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const token = ctx.getContext()?.headers?.authorization as string;

    const authorization = ctx.getContext().req.headers.authorization;
    const jwtToken = authorization.split(' ')[1];

    //verify the token and get the user type for API authentication

    return true;
  }
}
