import { Controller, Get, Req, UseGuards, Post, Res } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post()
  async processPayment(@Req() req, @Res() res) {
    return this.stripeService.processPayment(req, res);
  }

  @Post('create-payment-intent')
  async createPaymentIntent(@Req() req, @Res() res) {
    return this.stripeService.createPaymentIntent(req, res);
  }
}
