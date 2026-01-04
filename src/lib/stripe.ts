import { loadStripe } from '@stripe/stripe-js';

const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

export const stripePromise = loadStripe(stripePublishableKey);

export async function createCheckoutSession(
  priceId: string,
  mode: 'subscription' | 'payment',
  accessToken: string
): Promise<{ url: string } | { error: string }> {
  const response = await fetch('/api/stripe/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ priceId, mode }),
  });

  const data = await response.json();

  if (!response.ok) {
    return { error: data.error || 'Failed to create checkout session' };
  }

  return data;
}

export async function createPortalSession(
  accessToken: string
): Promise<{ url: string } | { error: string }> {
  const response = await fetch('/api/stripe/portal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    return { error: data.error || 'Failed to create portal session' };
  }

  return data;
}
