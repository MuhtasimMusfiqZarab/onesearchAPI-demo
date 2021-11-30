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
        customer_email: 'customer@example.com',
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
        success_url: `${process.env.CLIENT_SERVER_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}',`,
        cancel_url: `${process.env.CLIENT_SERVER_URL}/login`,
      });
      return res.json({ url: session.url });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  // create Payment Intent & sent client_secret
  async processStripePayment(request, response) {
    try {
      let intent;
      if (request.body.payment_method_id) {
        // Create the PaymentIntent
        intent = await stripe.paymentIntents.create({
          amount: 1099,
          currency: 'usd',
          // payment_method: request.body.payment_method_id,
          //or this one (same)
          automatic_payment_methods: { enabled: true },
          confirmation_method: 'manual',
          confirm: true,
        });
      } else if (request.body.payment_intent_id) {
        intent = await stripe.paymentIntents.confirm(
          request.body.payment_intent_id,
        );
      }
      // Send the response to the client
      response.send(this.generateResponse(intent));
    } catch (e) {
      // Display error on client
      return response.send({ error: e.message });
    }
  }

  generateResponse = intent => {
    // Note that if your API version is before 2019-02-11, 'requires_action'
    // appears as 'requires_source_action'.
    if (
      intent.status === 'requires_action' &&
      intent.next_action.type === 'use_stripe_sdk'
    ) {
      // Tell the client to handle the action
      return {
        requires_action: true,
        payment_intent_client_secret: intent.client_secret,
      };
    } else if (intent.status === 'succeeded') {
      // The payment didn’t need any additional actions and completed!
      // Handle post-payment fulfillment
      return {
        success: true,
      };
    } else {
      // Invalid status
      return {
        error: 'Invalid PaymentIntent status',
      };
    }
  };
}
