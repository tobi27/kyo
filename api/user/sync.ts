import type { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../_lib/prisma';
import { verifyAuth0Token, getAuth0UserId, getAuth0Email, getAuth0Name } from '../_lib/auth';

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
    const email = getAuth0Email(payload);
    const name = getAuth0Name(payload);

    // Upsert user
    const user = await prisma.user.upsert({
      where: { auth0Id },
      update: {
        email,
        name,
      },
      create: {
        auth0Id,
        email,
        name,
      },
      include: {
        subscriptions: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    return res.status(200).json({
      id: user.id,
      email: user.email,
      name: user.name,
      subscriptions: user.subscriptions.map((sub) => ({
        id: sub.id,
        plan: sub.plan,
        status: sub.status,
        currentPeriodEnd: sub.currentPeriodEnd?.toISOString() || null,
      })),
    });
  } catch (error) {
    console.error('Sync error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
