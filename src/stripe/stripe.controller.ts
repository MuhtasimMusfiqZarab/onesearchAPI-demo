import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Get()
  async stripePayment(@Req() req) {
    return req;
  }
}
