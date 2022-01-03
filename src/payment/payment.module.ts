import { Module } from '@nestjs/common';
import { PaymentResolver } from './payment.resolver';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';

@Module({
  providers: [PaymentResolver, PaymentService],
  controllers: [PaymentController]
})
export class PaymentModule {}
