import { Injectable } from '@nestjs/common';

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY);

const storeItems = new Map([[1, { priceCents: 100, name: 'Support Us' }]]);

@Injectable()
export class StripeService {
  //returns an url for the payment
  async processPayment(req, res) {
    try {
      const session = await stripe.checkout.sessions.create({
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
        success_url: `${process.env.CLIENT_SERVER_URL}/dashboard`,
        cancel_url: `${process.env.CLIENT_SERVER_URL}/login`,
      });
      return res.json({ url: session.url });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  //process Payment Intent
  async createPaymentIntent(req, res) {
    const calculateOrderAmount = items => {
      // Replace this constant with a calculation of the order's amount
      // Calculate the order total on the server to prevent
      // people from directly manipulating the amount on the client
      return 1400;
    };

    const { items } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: 'eur',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return res.send({
      clientSecret: paymentIntent.client_secret,
    });
  }
}
