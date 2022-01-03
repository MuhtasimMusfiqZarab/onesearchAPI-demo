import { Controller, Get, Req, UseGuards, Post, Res } from '@nestjs/common';
import { PaymentService } from './payment.service';

import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  // @UseGuards(JwtAuthGuard)
  @Post()
  async processPayment(@Req() req, @Res() res) {
    return this.paymentService.processPayment(req, res);
  }
}
