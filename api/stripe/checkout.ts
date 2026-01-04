import type { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../_lib/prisma';
import { stripe } from '../_lib/stripe';
import { verifyAuth0Token, getAuth0UserId, getAuth0Email } from '../_lib/auth';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const payload = await verifyAuth0Token(req);

    if (!payload) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { priceId, mode } = req.body;

    if (!priceId || !mode) {
      return res.status(400).json({ error: 'Missing priceId or mode' });
    }

    if (!['subscription', 'payment'].includes(mode)) {
      return res.status(400).json({ error: 'Invalid mode' });
    }

    const auth0Id = getAuth0UserId(payload);
    const email = getAuth0Email(payload);

    // Get or create user
    let user = await prisma.user.findUnique({
      where: { auth0Id },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          auth0Id,
          email,
        },
      });
    }

    // Get or create Stripe customer
    let stripeCustomerId = user.stripeCustomerId;

    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: {
          auth0Id: user.auth0Id,
          userId: user.id,
        },
      });

      stripeCustomerId = customer.id;

      await prisma.user.update({
        where: { id: user.id },
        data: { stripeCustomerId },
      });
    }

    // Determine plan from price ID
    const plan = priceId.includes('design_partner') ? 'design_partner' : 'standard';

    // Create checkout session
    const frontendUrl = process.env.VITE_APP_URL || process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      mode: mode as 'subscription' | 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${frontendUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontendUrl}/#pricing`,
      metadata: {
        userId: user.id,
        plan,
      },
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return res.status(500).json({ error: 'Failed to create checkout session' });
  }
}
