import type { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../_lib/prisma';
import { stripe } from '../_lib/stripe';
import { verifyAuth0Token, getAuth0UserId } from '../_lib/auth';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const payload = await verifyAuth0Token(req);

    if (!payload) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const auth0Id = getAuth0UserId(payload);

    const user = await prisma.user.findUnique({
      where: { auth0Id },
    });

    if (!user || !user.stripeCustomerId) {
      return res.status(400).json({ error: 'No billing account found' });
    }

    const frontendUrl = process.env.VITE_APP_URL || process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000';

    const session = await stripe.billingPortal.sessions.create({
      customer: user.stripeCustomerId,
      return_url: `${frontendUrl}/dashboard`,
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Portal error:', error);
    return res.status(500).json({ error: 'Failed to create portal session' });
  }
}
