/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY);

const storeItems = new Map([
  [1, { priceCents: 100 * 25, name: 'Silver' }],
  [2, { priceCents: 100 * 50, name: 'Gold' }],
  [3, { priceCents: 100 * 100, name: 'Platinum' }],
]);

@Injectable()
export class PaymentService {
  constructor(private userService: UserService) {}

  async processPayment(req, res) {
    try {
      const session = await stripe.checkout.sessions.create({
        customer_email: req.user.email,
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: req.body.items.map(item => {
          const storeItem = storeItems.get(item.id);
          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: storeItem.name,
              },
              unit_amount: storeItem.priceCents,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${process.env.CLIENT_SERVER_URL}?session_id={CHECKOUT_SESSION_ID}',`,
        cancel_url: `${process.env.CLIENT_SERVER_URL}?session_id={CHECKOUT_SESSION_ID}`,
      });
      return res.json({ url: session.url });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  async processPaymentForUser(req, res) {
    try {
      const session = await stripe.checkout.sessions.retrieve(
        req.body.payments[0].session_Id,
      );

      if (session.status === 'complete') {
        console.log('This is the user', req.user.userId);
        await this.userService.buyCredits(req.user.userId);
      }

      return res.json({ session });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }
}
