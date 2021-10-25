import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { GoogleAuthGuard } from './guards/google-auth.guard';

@Controller('google')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(GoogleAuthGuard)
  async googleAuth(@Request() req) {}

  //upon redirection req.user is assigned by passport with the request
  @Get('redirect')
  @UseGuards(GoogleAuthGuard)
  googleAuthRedirect(@Request() req) {
    //upon redirection user is created and JWT token is provided
    return this.authService.googleLogin(req);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
