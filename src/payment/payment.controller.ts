import { Controller, Get, Req, UseGuards, Post, Res } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  async processPayment(@Req() req, @Res() res) {
    return this.paymentService.processPayment(req, res);
  }
}
