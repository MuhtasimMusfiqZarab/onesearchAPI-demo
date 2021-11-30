import { Controller, Get, Req, UseGuards, Post, Res } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  //only for donate button
  @Post()
  async processPayment(@Req() req, @Res() res) {
    return this.stripeService.processPayment(req, res);
  }

  //process payment using payment intent
  @Post('pay')
  async createPaymentIntent(@Req() req, @Res() res) {
    return this.stripeService.processStripePayment(req, res);
  }
}
